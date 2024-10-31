const btn = document.getElementById("theme_switcher_btn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark_theme");
})