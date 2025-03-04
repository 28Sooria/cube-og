

function togglePopup(popupId, icon) {
    const popup = document.getElementById(popupId);
    const isActive = popup.style.display === "block";
    popup.style.display = isActive ? "none" : "block";
    icon.classList.toggle("active", !isActive);
}

document.addEventListener('click', function(event) {
    const isClickOnIcon = event.target.closest('.menu-icon');
    if (!isClickOnIcon) {
        document.querySelectorAll('.popup, #header-popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.querySelectorAll('.menu-icon').forEach(icon => {
            icon.classList.remove('active');
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("2TRuML2EJtcVQFloX"); // ✅ Replace with your actual Public Key

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let fullName = document.getElementById("fullName").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (!fullName || !phoneNumber || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // ✅ Define templateParams inside the function
        let templateParams = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            message: message
        };

        emailjs.send("service_7665cjf", "template_hwhbv9f", templateParams) // ✅ Replace with actual values
            .then(response => {
                alert("Your enquiry has been sent successfully!");
                document.querySelector(".contact-form").reset(); // Clear form after submission
            })
            .catch(error => {
                console.error("Failed to send email:", error);
                alert("Error sending enquiry. Please try again.");
            });
    });
});
