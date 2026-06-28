/* ==========================================
   BOOKING EXPERIENCE
========================================== */

let selectedExperience = "";

/* ---------- ELEMENTS ---------- */

const experienceCards = document.querySelectorAll(".experience-card");

const bookingSection = document.getElementById("bookingFormSection");

const bookingGreeting = document.getElementById("bookingGreeting");

const addressGroup = document.getElementById("addressGroup");

const bookingForm = document.getElementById("bookingForm");

const summarySection = document.getElementById("bookingSummary");



/* ==========================================
   EXPERIENCE SELECTION
========================================== */

experienceCards.forEach(card => {

    card.addEventListener("click", () => {

        experienceCards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        selectedExperience = card.dataset.experience;

        if (selectedExperience === "Studio Experience") {

            bookingGreeting.textContent =
                "Wonderful choice. We can't wait to welcome you to our studio.";

            addressGroup.classList.add("hidden");

        }

        else {

            bookingGreeting.textContent =
                "Luxury is on its way. We'll bring the experience to you.";

            addressGroup.classList.remove("hidden");

        }

        bookingSection.classList.remove("hidden");

        setTimeout(() => {

            bookingSection.classList.add("show");

        }, 100);

        bookingSection.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================================
   FORM SUBMIT
========================================== */

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();


    const name = document.getElementById("fullName").value;

    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const address = document.getElementById("address").value;

    const notes = document.getElementById("notes").value;


    /* ---------- SUMMARY ---------- */

    document.getElementById("summaryExperience").textContent =
        selectedExperience;

    document.getElementById("summaryName").textContent =
        name;

    document.getElementById("summaryService").textContent =
        service;

    document.getElementById("summaryDate").textContent =
        date;

    document.getElementById("summaryTime").textContent =
        time;


    summarySection.classList.remove("hidden");

    setTimeout(() => {

        summarySection.classList.add("show");

    }, 100);

    summarySection.scrollIntoView({

        behavior: "smooth"

    });


    /* ---------- WHATSAPP ---------- */

    const whatsappButton = document.getElementById("whatsappBtn");

    whatsappButton.onclick = function () {

        const phoneNumber = "234XXXXXXXXXX"; // Replace with her WhatsApp number


        let message =

`Hello DY Hairstylist! 🌸

I'd love to book an appointment.

Name:
${name}

Phone:
${phone}

Email:
${email}

Experience:
${selectedExperience}

Service:
${service}

Preferred Date:
${date}

Preferred Time:
${time}

${selectedExperience === "Home Experience" ? `Home Address:
${address}

` : ""}

Additional Notes:
${notes}

Looking forward to hearing from you.
Thank you!`;

        const url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    };

});