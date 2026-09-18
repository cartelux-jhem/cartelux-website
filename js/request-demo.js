(function () {
  var ENDPOINT = 'https://demo-mailer.cartelux.ai/';

  var form = document.getElementById('demo-form');
  if (!form) return;

  var submitButton = form.querySelector('.demo-form-submit');
  var submitLabel = form.querySelector('.demo-form-submit-label');
  var message = document.querySelector('.demo-form-message');
  var turnstileContainer = form.querySelector('.cf-turnstile');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var turnstileField = form.querySelector('[name="cf-turnstile-response"]');

    var payload = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      companyEmail: form.companyEmail.value.trim(),
      phone: form.phone.value.trim(),
      turnstileToken: turnstileField ? turnstileField.value : '',
    };

    submitButton.disabled = true;
    submitLabel.textContent = 'SENDING…';
    message.hidden = true;

    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 15000);

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
      .then(function (response) {
        clearTimeout(timeout);
        return response.json().catch(function () { return {}; }).then(function (body) {
          if (!response.ok) throw new Error(body.error || 'Request failed');

          submitLabel.textContent = 'SENT';
          form.querySelectorAll('input').forEach(function (input) { input.disabled = true; });
          message.hidden = false;
          message.classList.remove('demo-form-message--error');
          message.textContent = "Thanks! Our team will be in touch shortly to schedule your demo.";
        });
      })
      .catch(function (err) {
        clearTimeout(timeout);
        submitButton.disabled = false;
        submitLabel.textContent = 'SEND';
        message.hidden = false;
        message.classList.add('demo-form-message--error');
        message.textContent = (err && err.message) || 'Something went wrong sending your request. Please try again or email us directly.';
        if (window.turnstile && turnstileContainer) window.turnstile.reset(turnstileContainer);
      });
  });
})();
