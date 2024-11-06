//JavaScript

// "what's your name" button
document.getElementById("nameButton").addEventListener("click", function() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("nameOutput").innerText = "Hello " + name + ",";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded on the ABOUT page');
});

// personal enlarged image when clicked
document.getElementById("myImage").addEventListener("click", function() {
    this.style.width = "400px";
});

document.getElementById("myImage").addEventListener("mouseout", function() {
    this.style.width = "200px";
});

// onmouseover/onmouseout events
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar a, .dropdown .dropbtn');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'pink'; 
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});

// Text resize widget
<a href="javascript:void(0);" onclick="javascript:body.style.fontSize='.5em'"><span
style="font-size: xx-small;">Small</span></a>