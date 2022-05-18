function myFunction1() {
  var checkBox = document.getElementById("color1");
  var text = document.getElementById("quantity1");
  var number = document.getElementById("break1");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
