function showPassword() {
  const password = document.getElementById("password");
  const showEye = document.getElementById("showEye");
  const hideEye = document.getElementById("hideEye");
  if (password.type === "password") {
    password.type = "text";
    showEye.style.display = "none";
    hideEye.style.display = "block";
  } else {
    hideEye.style.display = "none";
    showEye.style.display = "block";
    password.type = "password";
  }
}

export default showPassword;
