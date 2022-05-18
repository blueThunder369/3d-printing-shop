function myFunction8() {
  var checkBox = document.getElementById("color8");
  var text = document.getElementById("quantity8");
  var number = document.getElementById("break8");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
