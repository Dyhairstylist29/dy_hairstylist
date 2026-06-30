/* ==========================================
   DY HAIRSTYLIST BOOKING EXPERIENCE
========================================== */

let selectedExperience = "";

/* ---------- ELEMENTS ---------- */

const experienceCards = document.querySelectorAll(".experience-card");
const bookingSection = document.getElementById("bookingFormSection");
const bookingGreeting = document.getElementById("bookingGreeting");
const addressGroup = document.getElementById("addressGroup");
const bookingForm = document.getElementById("bookingForm");
const summarySection = document.getElementById("bookingSummary");
const whatsappButton = document.getElementById("whatsappBtn");

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
                "Wonderful choice. We look forward to welcoming you to the studio.";

            addressGroup.classList.add("hidden");

        } else {

            bookingGreeting.textContent =
                "Luxury is on its way. We'll bring the experience to your doorstep.";

            addressGroup.classList.remove("hidden");

        }

        bookingSection.classList.remove("hidden");

        setTimeout(() => {
            bookingSection.classList.add("show");
        }, 100);

        bookingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(dateString) {

    if (!dateString) return "";

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    return new Date(dateString).toLocaleDateString("en-GB", options);

}

/* ==========================================
   FORM SUBMIT
========================================== */

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const address = document.getElementById("address").value.trim();

    const notes = document.getElementById("notes").value.trim();

    /* ---------- SUMMARY ---------- */

    document.getElementById("summaryExperience").textContent = selectedExperience;

    document.getElementById("summaryName").textContent = name;

    document.getElementById("summaryService").textContent = service;

    document.getElementById("summaryDate").textContent = formatDate(date);

    document.getElementById("summaryTime").textContent = time;

    summarySection.classList.remove("hidden");

    setTimeout(() => {
        summarySection.classList.add("show");
    }, 100);

    summarySection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    /* ---------- WHATSAPP ---------- */

    whatsappButton.onclick = function () {

        whatsappButton.disabled = true;

        whatsappButton.textContent = "Opening WhatsApp...";

        const phoneNumber = "2348021252593";

        let message =
`Hello DY Hairstylist! 🌸

I'd love to reserve an appointment.

━━━━━━━━━━━━━━

Name:
${name}

Phone:
${phone}

${email ? `Email:
${email}

` : ""}Experience:
${selectedExperience}

Service Requested:
${service}

Preferred Date:
${formatDate(date)}

Preferred Time:
${time}

${selectedExperience === "Home Service" ? `Home Address:
${address}

` : ""}${notes ? `Additional Notes:
${notes}

` : ""}Thank you. I look forward to your confirmation. ✨`;

        const url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        setTimeout(() => {

            whatsappButton.disabled = false;

            whatsappButton.textContent = "Send Booking via WhatsApp";

        }, 2500);

    };

});