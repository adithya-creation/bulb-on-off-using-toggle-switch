function checktoggle() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");
    // Get the output
    var bulb = document.getElementById("bulb");
    var text = document.getElementById("bulbstatus");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        bulb.src = "2.png";
        text.innerHTML = "Bulb - ON";
    } else {
        bulb.src = "1.png";
        text.innerHTML = "Bulb - OFF";
    }
}

