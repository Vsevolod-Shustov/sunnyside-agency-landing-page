document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    let headerNav = document.getElementById("header-nav");
    let handleMenuToggle = (e) => {
        headerNav.classList.toggle("hidden-mobile");
    }
    document.getElementById("header-menu-toggle").addEventListener("click", handleMenuToggle);
});
