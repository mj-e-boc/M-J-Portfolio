const email = document.querySelector("#email");
const errorElement = document.getElementById("#error");
form.addEventListener("submit", (e) => {
  let message = "";
  if (!email.value.Tolowercase()) message += "email must be in lowercase format.";
  e.preventDefault();
  errorElement.innerText = message;
});
