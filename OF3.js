function myFunction3() {
  var checkBox = document.getElementById("color3");
  var text = document.getElementById("quantity3");
  var number = document.getElementById("break3");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
