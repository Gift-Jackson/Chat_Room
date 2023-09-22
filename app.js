const lightMode = document.querySelector(".light-mode-btn");
const darkMode = document.querySelector(".dark-mode-btn");
const bottomBtn = document.querySelector(".to-bottom");
const body = document.body;

let lastScroll = 50;

window.addEventListener("scroll", () => {
    if (scrollY > lastScroll) {
        bottomBtn.classList.add("active")
    }
    else {
        bottomBtn.classList.remove("active")
    }
    lastScroll = window.scrollY;
})

darkMode.addEventListener("click", () => {
    lightMode.classList.remove("active")
    darkMode.classList.add("active");
    body.classList.add("dark-theme");
    saveTheme();
});
// Dark Mode Ends Here

// Light Mode Starts here
lightMode.addEventListener("click", () => {
    lightMode.classList.add("active")
    darkMode.classList.remove("active");
    body.classList.remove("dark-theme");
    saveTheme();
});

function saveTheme() {
    localStorage.setItem("theme", body.classList)
}
function getTheme() {
    body.classList = localStorage.getItem("theme");

    if (body.classList.contains("dark-theme")) {
        lightMode.classList.remove("active")
        darkMode.classList.add("active");
    }
    else {
        lightMode.classList.add("active")
        darkMode.classList.remove("active");
    }
}
getTheme();