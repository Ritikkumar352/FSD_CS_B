const userId = document.getElementById("userId");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function (event) {
  let isValid = true;

  if (userId.value.trim() === "") {
    alert(userId, "User ID is required.");
    isValid = false;
  }

  if (password.value.trim() === "") {
    alert(password, "Password is required.");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});
