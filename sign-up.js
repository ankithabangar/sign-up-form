document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  var pwdValid = verifyPwd();
  var pwdMatch = confirmPwd();

  if (pwdValid && pwdMatch) {
    form.submit;
  }
});

function verifyPwd() {
  var pwd = document.querySelector("#pwd").value;
  if (pwd == "") {
    document.querySelector(".message").textContent =
      "Fill the password please!";
    return false;
  } else if (pwd.length < 8) {
    document.querySelector(".message").textContent =
      "Password should be more than 8 characters!";
    return false;
  } else
    document.querySelector(".message").textContent = "Password is correct!";
}

function confirmPwd() {
  const pwd = document.querySelector("#pwd").value;
  const confirm_pwd = document.querySelector("#confirm-pwd").value;

  if (pwd !== confirm_pwd) {
    document.querySelector(".confirmMessage").textContent =
      "Passwords dont match!";
  } else {
    document.querySelector(".confirmMessage").textContent = "Passwords match!";
  }
}
