
const button = document.getElementById('btn')

button.addEventListener("click", function(e) {
    const Review = prompt("Review Of Your Experience in Selve");
document.body.innerHTML = "<p>Thanks for the feedback, "+ Review + "!<p>";
});



const myBtn = document.getElementById('btn-2');

myBtn.addEventListener("click", function(e) {
    const name = prompt("Name for your Reservation?");

    document.body.innerHTML = "<p>Welcome, " + name + "!</p>";
});



