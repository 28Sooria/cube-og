document.getElementById('what-to-do-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('what-to-do').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('solutions-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('solutions').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('trending-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('trending').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('future-plan-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('future-plan').scrollIntoView({
        behavior: 'smooth'
    });
});


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('.sidebar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.getAttribute('href').substring(1); 
        scrollToSection(sectionId); 
    });
});

document.getElementById("sidebarToggle").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
};


function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}


document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
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
