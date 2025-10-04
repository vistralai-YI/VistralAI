document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('demoForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Thank you! We will contact you soon.';
  this.reset();
});