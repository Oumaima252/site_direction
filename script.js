
// Menu de navigation pour les téléphones
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fermer le menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    }
});

// Fermer le menu après avoir choisi une rubrique
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// Ouverture et fermeture des descriptions des services
const serviceQuestions = document.querySelectorAll(".service-question");

serviceQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const currentItem = question.parentElement;
        const answer = currentItem.querySelector(".service-answer");
        const isAlreadyOpen = currentItem.classList.contains("active");

        // Fermer tous les autres services
        document.querySelectorAll(".service-item").forEach(function (item) {
            item.classList.remove("active");
            item.querySelector(".service-answer").style.maxHeight = null;
        });

        // Ouvrir le service sélectionné s'il était fermé
        if (!isAlreadyOpen) {
            currentItem.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});