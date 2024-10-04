document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameButton").addEventListener("click", function() {
        const name = prompt("Please enter your name:");
        
        if (name) {
            document.getElementById("nameOutput").innerText = "Hello, " + name + "!";
        } else {
            document.getElementById("nameOutput").innerText = "No name entered.";
        }
    });
});
