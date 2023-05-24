// preloder

setTimeout(function () {
  $("#preloder").fadeToggle();
}, 1000);

// when refresh you will go to top no matter where you are .
history.scrollRestoration = "manual";

// send mail
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "prabhatbhasme@gmail.com",
    Password: "prabhat@course",
    To: "ethnickdon@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New mail from anime website",
    Body: "And this is the body",
  }).then((message) => alert(message));

  document.querySelector("#redirect").addEventListener("click", () => {
    window.location = "navbar.html";
  });
}
