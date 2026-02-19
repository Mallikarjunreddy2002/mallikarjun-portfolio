document.getElementById('contractForm').addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});


const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function () {
  successMessage.textContent = "Sending message...";
});
