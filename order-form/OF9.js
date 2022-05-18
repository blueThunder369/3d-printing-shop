function myFunction9() {
  var checkBox = document.getElementById("color9");
  var text = document.getElementById("quantity9");
  var number = document.getElementById("break9");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
