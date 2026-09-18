const ALLOWED_ORIGINS = new Set([
  'https://cartelux.ai',
  'https://www.cartelux.ai',
  'https://cartelux-website.pages.dev',
]);

function corsHeaders(origin) {
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
}

function jsonResponse(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

async function verifyTurnstile(token, ip, secret) {
  if (!token) return false;

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const result = await res.json();
  return result.success === true;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    let data;
    try {
      data = await request.json();
    } catch (err) {
      return jsonResponse({ error: 'Invalid JSON body' }, 400, origin);
    }

    const firstName = (data.firstName || '').trim();
    const lastName = (data.lastName || '').trim();
    const companyEmail = (data.companyEmail || '').trim();
    const phone = (data.phone || '').trim();
    const turnstileToken = (data.turnstileToken || '').trim();

    if (!firstName || !lastName || !isValidEmail(companyEmail)) {
      return jsonResponse({ error: 'Missing or invalid required fields' }, 400, origin);
    }

    const turnstileOk = await verifyTurnstile(turnstileToken, request.headers.get('CF-Connecting-IP'), env.TURNSTILE_SECRET);
    if (!turnstileOk) {
      return jsonResponse({ error: 'Anti-spam check failed. Please try again.' }, 400, origin);
    }

    const text = [
      'New demo request from the Cartelux website:',
      '',
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Company email: ${companyEmail}`,
      `Phone: ${phone || 'Not provided'}`,
    ].join('\n');

    const html = [
      '<h2>New demo request</h2>',
      `<p><strong>First name:</strong> ${escapeHtml(firstName)}</p>`,
      `<p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>`,
      `<p><strong>Company email:</strong> ${escapeHtml(companyEmail)}</p>`,
      `<p><strong>Phone:</strong> ${escapeHtml(phone) || 'Not provided'}</p>`,
    ].join('');

    try {
      await env.EMAIL.send({
        to: 'jhemar.danio@cartelux.ai', // TODO: switch back to marketing@cartelux.ai once verified end-to-end
        from: 'Cartelux Website <noreply@notify.cartelux.ai>',
        subject: `New demo request from ${firstName} ${lastName}`,
        html,
        text,
      });
    } catch (err) {
      return jsonResponse({ error: 'Failed to send email', detail: String(err && err.message || err) }, 502, origin);
    }

    return jsonResponse({ ok: true }, 200, origin);
  },
};
