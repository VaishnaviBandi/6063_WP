function checkTextField(field) {
  document.getElementById("error").innerText =
    (field.value === "") ? "Field is empty." : "";
}


function checkTextField(field) {
  document.getElementById("error1").innerText =
    (field.value === "") ? "Field is empty." : "";
}


function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

function check(){
    if(document.getElementById("victory").value == "victory")
        return true;
    else 
        document.getElementById("error").innerHTML = "Wrong keyword entry."
        return false;
}


function showMessage() {
  var x = document.forms.namedItem("message").innerHTML;
  document.getElementById("demo").innerHTML = x;
}