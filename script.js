document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you, ${name}! I'll contact you at ${email}${phone ? ' or ' + phone : ''}.`);
    this.reset();
  } else {
    alert("Please fill out your name and email.");
  }
});
