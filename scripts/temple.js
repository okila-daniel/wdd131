
// Mobile navigation menu
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

// Current year
const currentYear = document.querySelector("#current-year");
currentYear.textContent = new Date().getFullYear();

// Last modified date
const lastModified = document.querySelector("#last-modified");
lastModified.textContent = document.lastModified;
