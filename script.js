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
            this.style.backgroundColor = 'pink'; 
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
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

        // Event listener for showing/hiding phone number input
        radioInput.addEventListener("change", function() {
            togglePhoneInput();
        });

        const radioLabel = document.createElement("label");
        radioLabel.for = `contact${method}Method`;
        radioLabel.innerText = method;

        form.appendChild(radioInput);
        form.appendChild(radioLabel);
        form.appendChild(document.createElement("br"));
    });

    form.appendChild(document.createElement("br"));

    // Phone Number Input (conditional input)
    const phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.id = "phoneNumberDiv";
    phoneNumberDiv.style.display = "none"; // Hidden by default

    const phoneLabel = document.createElement("label");
    phoneLabel.for = "contactPhoneNumber";
    phoneLabel.innerText = "Your Phone Number:";

    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "contactPhoneNumber";
    phoneInput.name = "contactPhoneNumber";
    phoneInput.pattern = "[0-9]{10}";
    phoneInput.placeholder = "1234567890"; // Placeholder text

    phoneNumberDiv.appendChild(phoneLabel);
    phoneNumberDiv.appendChild(phoneInput);
    form.appendChild(phoneNumberDiv);

    // How Did You Hear About Us? (dropdown)
    const howHeardLabel = document.createElement("label");
    howHeardLabel.innerText = "How Did You Hear About Us?";
    form.appendChild(howHeardLabel);
    form.appendChild(document.createElement("br"));

    const howHeardSelect = document.createElement("select");
    howHeardSelect.id = "howHeardSelect";
    howHeardSelect.name = "howHeard";
    howHeardSelect.required = true;

    const options = ["", "Social Media", "Friend", "Search Engine", "Other"];
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.toLowerCase().replace(/ /g, "-");
        opt.innerText = option;
        howHeardSelect.appendChild(opt);
    });

    form.appendChild(howHeardSelect);
    form.appendChild(document.createElement("br"));

    // Agreement Checkboxes
    const agreeUpdatesLabel = document.createElement("label");
    const agreeUpdatesInput = document.createElement("input");
    agreeUpdatesInput.type = "checkbox";
    agreeUpdatesInput.id = "agreeUpdates";
    agreeUpdatesInput.name = "agreements";
    agreeUpdatesInput.required = true;
    
    agreeUpdatesLabel.appendChild(agreeUpdatesInput);
    agreeUpdatesLabel.appendChild(document.createTextNode("I agree to receive updates"));

    const agreeTermsLabel = document.createElement("label");
    const agreeTermsInput = document.createElement("input");
    agreeTermsInput.type = "checkbox";
    agreeTermsInput.id = "agreeTerms";
    agreeTermsInput.name = "agreements";
    agreeTermsInput.required = true;

    agreeTermsLabel.appendChild(agreeTermsInput);
    agreeTermsLabel.appendChild(document.createTextNode("I agree to the Terms and Conditions"));

    form.appendChild(document.createElement("br"));
    form.appendChild(agreeUpdatesLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(agreeTermsLabel);
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

    document.getElementById("formContainer").appendChild(form);

    // Event listener for submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("contactMessage").value;
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
        const phone = contactMethod === "Phone" ? document.getElementById("contactPhoneNumber").value : null;
        const howHeard = document.getElementById("howHeardSelect").value;

        // Collect agreement values
        const agreeUpdates = document.getElementById("agreeUpdates").checked;
        const agreeTerms = document.getElementById("agreeTerms").checked;

        // Store data in local storage
        localStorage.setItem("contactName", name);
        localStorage.setItem("contactEmail", email);
        localStorage.setItem("contactMessage", message);
        localStorage.setItem("contactMethod", contactMethod);
        localStorage.setItem("contactPhoneNumber", phone);
        localStorage.setItem("howHeard", howHeard);
        localStorage.setItem("agreeUpdates", agreeUpdates);
        localStorage.setItem("agreeTerms", agreeTerms);

        alert("Your contact details have been stored!");
    });

    // Event listener for reset
    document.getElementById("clearButton").addEventListener("click", function() {
        document.getElementById("contactForm").reset();
        localStorage.clear();

        alert("Form has been cleared .");
    });

    // Function to toggle phone input visibility
    function togglePhoneInput() {
        const isPhoneSelected = document.getElementById("contactPhoneMethod").checked;
        phoneNumberDiv.style.display = isPhoneSelected ? "block" : "none";
    }
}

// Create the contact form
createContactForm();