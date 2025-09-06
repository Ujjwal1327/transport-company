const cutButton = document.getElementById("cut");
const hamBurger = document.getElementById("ham-burger")

cutButton.addEventListener("click", () => {
    const resMenu = document.getElementById("res-menu")
    resMenu.style.display = "none";
    document.body.classList.remove("no-scroll");
});
hamBurger.addEventListener("click", () => {
    const resMenu = document.getElementById("res-menu")
    resMenu.style.display = "flex";
    document.body.classList.add("no-scroll");
})


// dropdown of mobile version 
const dropdownTrigger = document.querySelector("#dropdown p");
const submenu = document.querySelector("#dropdown .submenu");
const arrow = document.querySelector("#dropdown p i");
dropdownTrigger.addEventListener("click", () => {
    console.log("toggle dropdown")
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        submenu.style.display = "block";
        arrow.classList.add("rotate");
    }
});

document.getElementById("move-to-contact").addEventListener("click", function () {
    window.location.href = "contact.html";
});