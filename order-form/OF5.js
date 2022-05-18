function myFunction5() {
  var checkBox = document.getElementById("color5");
  var text = document.getElementById("quantity5");
  var number = document.getElementById("break5");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
