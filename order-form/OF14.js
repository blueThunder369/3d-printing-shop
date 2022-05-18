function myFunction14() {
  var checkBox = document.getElementById("color14");
  var text = document.getElementById("quantity14");
  var number = document.getElementById("break14");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
