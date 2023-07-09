const mobile_menu = document.querySelector("#mobile-menu");
const tools = document.querySelector("#tools");

function toggle_menu() {
    let menu_display = getComputedStyle(mobile_menu).display;
    if (menu_display == "none") {
        mobile_menu.style.transition = "0.3s ease-in-out";
        tools.style.transition = "0.3s ease-in-out";
        mobile_menu.style.display = "flex";
        tools.style.display = "flex";
    } else {
        mobile_menu.style.display = "none";
        tools.style.display = "none";
    }
}