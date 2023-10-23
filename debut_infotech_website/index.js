document.getElementById("readmore1").addEventListener("click", function() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var message = document.getElementById("message").value;

    if (fullname === "" || email === "" || phoneNumber === "" || message === "") {
        alert("All fields are required");
        return;
    }
 let namePattern = /^[A-Za-z\s]{4,}$/;
    if (!fullname.match(namePattern)) {
        alert("Please enter a valid name with at least 4 characters");
        return;
    }
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }
    let phonePattern = /^\d{10}$/;
    if (!phoneNumber.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number with only numeric characters.");
        return;
    }
    alert("Form is valid. You can submit it or perform additional actions.");
});