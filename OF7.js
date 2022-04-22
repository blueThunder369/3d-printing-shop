function myFunction7() {
  var checkBox = document.getElementById("color7");
  var text = document.getElementById("quantity7");
  var number = document.getElementById("break7");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
