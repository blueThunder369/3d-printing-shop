function myFunction6() {
  var checkBox = document.getElementById("color6");
  var text = document.getElementById("quantity6");
  var number = document.getElementById("break6");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
