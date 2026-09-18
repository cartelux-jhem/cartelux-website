(function () {
  var ENDPOINT = 'https://demo-mailer.cartelux.ai/';

  var form = document.getElementById('demo-form');
  if (!form) return;

  var submitButton = form.querySelector('.demo-form-submit');
  var submitLabel = form.querySelector('.demo-form-submit-label');
  var message = document.querySelector('.demo-form-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var payload = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      companyEmail: form.companyEmail.value.trim(),
      phone: form.phone.value.trim(),
    };

    submitButton.disabled = true;
    submitLabel.textContent = 'SENDING…';
    message.hidden = true;

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');

        form.hidden = true;
        message.hidden = false;
        message.classList.remove('demo-form-message--error');
        message.textContent = "Thanks! Our team will be in touch shortly to schedule your demo.";
      })
      .catch(function () {
        submitButton.disabled = false;
        submitLabel.textContent = 'SEND';
        message.hidden = false;
        message.classList.add('demo-form-message--error');
        message.textContent = 'Something went wrong sending your request. Please try again or email us directly.';
      });
  });
})();
