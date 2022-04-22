function myFunction12() {
  var checkBox = document.getElementById("color12");
  var text = document.getElementById("quantity12");
  var number = document.getElementById("break12");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
