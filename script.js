// small JS for year and contact form feedback
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name')?.value || 'Friend';
  alert('Thanks, ' + name + '! Your message has been received. (Demo only)');
  document.getElementById('contactForm')?.reset();
}
