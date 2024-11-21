const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", (e) => {
  const name = document.getElementById("name");

  let emailCheck =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!name.value) {
    e.preventDefault();
    nameError.textContent = "*Name is required";
  } else {
    nameError.textContent = " ";
  }

  if (!email.value.match(emailCheck)) {
    e.preventDefault();
    emailError.textContent = "*Valid email is required";
  } else {
    emailError.textContent = " ";
  }

  if (!message.value) {
    e.preventDefault();
    messageError.textContent = "*Message field should not be empty!";
  } else {
    messageError.textContent = " ";
  }
});
