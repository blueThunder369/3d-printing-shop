function myFunction13() {
  var checkBox = document.getElementById("color13");
  var text = document.getElementById("quantity13");
  var number = document.getElementById("break13");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
