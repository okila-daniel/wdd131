// Select page elements
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll(".nav-link");
const templeCards = document.querySelectorAll(".temple-card");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("open");
});

// Filter temple cards
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const selectedFilter = link.dataset.filter;

        // Update the active navigation link
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        // Show or hide cards based on the selected category
        templeCards.forEach((card) => {
            const category = card.dataset.category;
            const shouldShow =
                selectedFilter === "all" || category === selectedFilter;

            card.hidden = !shouldShow;
        });

        // Close the mobile menu after selecting a filter
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Display the current year
document.querySelector("#current-year").textContent =
    new Date().getFullYear();

// Display the last modified date
const lastModified = new Date(document.lastModified);

document.querySelector("#last-modified").textContent =
    lastModified.toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short"
    });