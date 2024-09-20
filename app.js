const emailAdress = document.querySelector('.email-address'),
emailForm = document.querySelector('.signup'),
successMsg = document.querySelector('.success-container'),
submitBtn =  document.querySelector('.submit-button'),
dismissBtn = document.querySelector('.dismiss-btn'),
invalidWarning  = document.querySelector('.email-invalid');

submitBtn.addEventListener('click', checkValidity);

function checkValidity() {
    let email = emailAdress.value.trim();
    
    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(email)) {
        // Email is valid, proceed with form submission
        console.log("Email is valid");
        // You can also show a success message or submit the form here
        successMsg.style.display = "flex";
    } else {
        // Email is invalid, show warning message
        console.log("Email is invalid");
        invalidWarning.style.display = "block";
    };
};
