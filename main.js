function nameVaild() {
  var userName = document.getElementById("validationCustom01").value;
  var error = document.getElementById("error");

  console.log(userName);

  if (userName.length < 5 || userName.length == "") {
    error.classList.remove("invisible");
  } else {
    error.classList.add("invisible");
  }
}
