function Validator() {
    var First_Name = document.getElementById("firstname").value;
    var Last_Name = document.getElementById("lastname").value;
    var Email = document.getElementById("email").value;
    var Feedback = document.getElementById("comment").value;
    var Country = document.getElementById('country').value;
    if (First_Name === "") {
    } else if (Last_Name === "") {
    } else if (Email.includes("@") !== true  || Email === "" || Email.includes(".com") !== true && Email.includes(".ca") !== true) {
    } else if (Country.length < 5){
    } else if (Feedback === "") {
    } else {
        alert("Feedback has been submitted. Thank you for submitting.")
    }
}
/* This is copied from my contact page javascript that I submitted for Assignment 1 */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
