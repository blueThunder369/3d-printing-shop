function myFunction2() {
  var checkBox = document.getElementById("color2");
  var text = document.getElementById("quantity2");
  var number = document.getElementById("break2");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
