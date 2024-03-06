function toggleMenu() {
  const menu = document.querySelector(".menuLinks");
  const icon = document.querySelector(".hamburgerIcon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check the user's preference for dark mode
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // Set initial mode based on user's preference
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  // Function to enable dark mode
  function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }

  // Function to disable dark mode
  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
  }
});

function toggleIcon() {
  const iconElement = document.getElementById("icon");

  // Toggle between moon and sun icons
  if (iconElement.textContent === "brightness_3") {
    iconElement.textContent = "brightness_5";
  } else {
    iconElement.textContent = "brightness_3";
  }
}
