function myFunction10() {
  var checkBox = document.getElementById("color10");
  var text = document.getElementById("quantity10");
  var number = document.getElementById("break10");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
