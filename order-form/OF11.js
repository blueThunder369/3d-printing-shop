function myFunction11() {
  var checkBox = document.getElementById("color11");
  var text = document.getElementById("quantity11");
  var number = document.getElementById("break11");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
