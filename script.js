const toggleBtn = document.getElementById('themeToggle');
const htmlTag = document.documentElement;
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');

// Select the button
const themeToggle = document.getElementById("themeToggle");

const htmlEl = document.documentElement;

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.getElementById("reservationsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from reloading page
    alert("Reservation Successful!");
    this.reset(); // clear form
});
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show popup
    const popup = document.getElementById("popupMessage");
    popup.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    // Optionally reset the form
    this.reset();
});

  



