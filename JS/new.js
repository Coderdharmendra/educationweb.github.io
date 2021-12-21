// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
// }

// for toggle

function myFunction() {
    var x = document.getElementById("mySidebar");

    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}