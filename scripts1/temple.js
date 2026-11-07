
// =========================
// HAMBURGER MENU
// =========================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// =========================
// CURRENT COPYRIGHT YEAR
// =========================

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// =========================
// LAST MODIFIED DATE
// =========================

document.querySelector("#lastModified").textContent = document.lastModified;
