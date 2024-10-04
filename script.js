//JavaScript
document.getElementById("nameButton").addEventListener("click", function() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("nameOutput").innerText = "Hello " + name + ",";
    }
});

document.getElementById("myImage").addEventListener("click", function() {
    this.style.width = "400px";
});

document.getElementById("myImage").addEventListener("mouseout", function() {
    this.style.width = "200px";
});

document.getElementById("myImage").addEventListener("mouseover", function() {
    this.style.opacity = "0.7"; 
});

document.getElementById("myImage").addEventListener("mouseout", function() {
    this.style.opacity = "1"; 
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar a, .dropdown .dropbtn');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'pink'; // Change color on hover
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Reset color
        });
    });
});
