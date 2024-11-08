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
function setFontSize(size) {
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, li, a'); // Add other tags you want to affect

    textElements.forEach(function(element) {
        element.style.fontSize = size;
    });
}

// Add event listeners for all font size links
window.onload = function() {
    const links = document.querySelectorAll('.font-size-link');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            setFontSize(size);
        });
    });
}

//Dark theme for accessibility
function toggleColorTheme() {
    const body = document.body;
    body.classList.toggle("darkmode");

    console.log("Current class on body: ", body.classList);

    if (body.classList.contains("darkmode")) {
        body.style.backgroundColor = "#000000";  // Temp for debugging
    } else {
        body.style.backgroundColor = "#f7f3ed";  // Temp for debugging
    }
}

document.getElementById("darkModeToggle").addEventListener("click", toggleColorTheme);