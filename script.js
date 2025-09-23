// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Current year in footer
document.getElementById('year').innerText = new Date().getFullYear();

// Simple contact form handler (client-side only).
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');

form.addEventListener('submit', function(e){
  e.preventDefault();
  // Bootstrap validation
  if(!form.checkValidity()){
    form.classList.add('was-validated');
    return;
  }

  // Prepare a mailto link (quick way to receive messages)
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  // open user's mail client
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

  // Show success visually (in case mail client not available)
  alertBox.style.display = 'block';
  alertBox.className = 'alert alert-success';
  alertBox.innerText = 'Your message is being composed in your mail client. If nothing opens, please email your.email@example.com directly.';
});
