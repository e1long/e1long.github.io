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

// enlarged image when clicked
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
            this.style.backgroundColor = 'pink'; // Change color on hover
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Reset color
        });
    });
});

// Contact Form
function createContactForm() {
    const form = document.createElement("form");
    form.id = "contactForm";

    function createInputField(labelText, inputType, inputId, required = false) {
        const label = document.createElement("label");
        label.for = inputId;
        label.innerText = labelText;

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputId;
        if (required) input.required = true;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    }

    // Name field
    createInputField("Your Name:", "text", "contactName", true);

    // Email field
    createInputField("Your Email:", "email", "contactEmail", true);

    // Message
    const messageLabel = document.createElement("label");
    messageLabel.for = "contactMessage";
    messageLabel.innerText = "Your Message:";

    const message = document.createElement("textarea");
    message.id = "contactMessage";
    message.name = "contactMessage";
    message.rows = 4;
    message.cols = 50;
    message.required = true;

    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    // Preferred Contact Method (Radio Buttons)
    const contactMethodLabel = document.createElement("label");
    contactMethodLabel.innerText = "Preferred Method of Contact:";
    form.appendChild(contactMethodLabel);
    form.appendChild(document.createElement("br"));

    const contactMethods = ["Email", "Phone"];
    contactMethods.forEach(method => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `contact${method}Method`;
        radioInput.name = "contactMethod";
        radioInput.value = method;
        radioInput.required = true;

        const radioLabel = document.createElement("label");
        radioLabel.for = `contact${method}Method`;
        radioLabel.innerText = method;

        form.appendChild(radioInput);
        form.appendChild(radioLabel);
        form.appendChild(document.createElement("br"));
    });
    form.appendChild(document.createElement("br"));

    // Submit and Reset buttons
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Submit";

    const resetButton = document.createElement("button");
    resetButton.type = "reset";
    resetButton.innerText = "Clear";

    form.appendChild(submitButton);
    form.appendChild(resetButton);

    document.body.appendChild(form);

    // Event listener for submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("contactMessage").value;
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
        const subscriptions = Array.from(document.querySelectorAll('input[name="subscriptions"]:checked')).map(cb => cb.value);

        localStorage.setItem("contactName", name);
        localStorage.setItem("contactEmail", email);
        localStorage.setItem("contactMessage", message);
        localStorage.setItem("contactMethod", contactMethod);
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions)); // Store array as JSON

        alert("Your contact details have been stored!");
    });

    // Event listener for reset
    form.addEventListener("reset", function() {
        localStorage.clear();
        alert("Form has been cleared and local storage reset.");
    });
}

// Call the function to create the contact form
createContactForm();