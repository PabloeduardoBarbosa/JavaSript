
//button changes the element:

document.getElementById("button").onclick = function(){
    document.getElementById("confirm").innerHTML = "You reservation is booked for the next trip";
        document.getElementById("button").style.display = "none";
}

