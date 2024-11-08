const userId = document.getElementById("userId");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function (event) {
  let isValid = false;

  if (userId.value.trim() === "") {
    alert("User ID is required.");
    isValid = false;
  }
  if (password.value.trim() === "") {
    alert("Password is required.");
    isValid = false;
  }
  if (userId.value.trim() === "admin" && password.value.trim() === "admin") {
    isValid = true;
  }

  if (userId.value.trim() != "admin" || password.value.trim() != "admin") {
    alert("Username or Password is not correct")
  }

  if (!isValid) {
    event.preventDefault();
  }
});
