const cutButton = document.getElementById("cut");
const hamBurger = document.getElementById("ham-burger")

cutButton.addEventListener("click", () => {
    const resMenu = document.getElementById("res-menu")
    resMenu.style.display = "none";
});
hamBurger.addEventListener("click", () => {
    const resMenu = document.getElementById("res-menu")
    resMenu.style.display = "flex";
})