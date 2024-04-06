const email = document.querySelector("input.js-email");
const subcribe = document.querySelector("input.js-subscribe");
const errorText = document.getElementById("js-error-text");
const card = document.getElementById("js-card");
const successCard = document.getElementById("js-success-card");
const emailTxt = document.getElementById("js-email-input");
const dismissBtn = document.getElementById("js-dismiss");

function validate(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail() {
  if (validate(email.value) === false || email.value.length === 0) {
    errorText.style.display = "block";
    email.style.background = "#ff625730";
    email.ariaPlaceholder.style.textColor = "#ff625730";

    email.focus();
  } else {
    successCard.style.display = "flex";
    card.style.display = "none";
  }
}

function dismiss() {
  successCard.style.display = "none";
  card.style.display = "";
  errorText.style.display = "";
  input.style.background = "";
  input.value = "";
  input.focus();
}
