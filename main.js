function nameVaild(e) {
  var userName = document.getElementById("validationCustom01").value;
  console.log(userName);
  if (userName.length < 5 || userName.length == "") {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
  }
}
