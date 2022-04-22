function myFunction4() {
  var checkBox = document.getElementById("color4");
  var text = document.getElementById("quantity4");
  var number = document.getElementById("break4");
  if (checkBox.checked == false){
    text.style.display = "none";
    number.style.display = "none";
  } else {
     text.style.display = "block";
     number.style.display = "block";
  }
}
