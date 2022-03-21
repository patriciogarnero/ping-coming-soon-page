const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const emailValue = email.value.trim();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(mailformat)) {
    removeError(email);
  } else {
    setError(email);
  }
}

function setError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function removeError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}
