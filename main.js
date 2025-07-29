document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting Reyes del Taco! We'll get back to you soon.");
  this.reset();
});
