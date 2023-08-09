const mobile_menu = document.querySelector("#mobile-menu");
const tools = document.querySelector("#tools");

const submenu_1 = document.querySelector("#sub-menu-1");
const submenu_2 = document.querySelector("#sub-menu-2");
const submenu_3 = document.querySelector("#sub-menu-3");
const submenu_4 = document.querySelector("#sub-menu-4");

function toggle_menu() {
    let menu_display = getComputedStyle(mobile_menu).display;
    if (menu_display == "none") {
        mobile_menu.style.display = "flex";
        tools.style.display = "flex";
    } else {
        mobile_menu.style.display = "none";
        tools.style.display = "none";
    }
}

function submenu_manager(id) {
    switch (id) {
        case "submenu-1": {
            submenu_1.style.display = "flex";
            submenu_2.style.display = "none";
            submenu_3.style.display = "none";
            submenu_4.style.display = "none";
            break;
        }
        case "submenu-2": {
            submenu_1.style.display = "none";
            submenu_2.style.display = "flex";
            submenu_3.style.display = "none";
            submenu_4.style.display = "none";
            break;
        }
        case "submenu-3": {
            submenu_1.style.display = "none";
            submenu_2.style.display = "none";
            submenu_3.style.display = "flex";
            submenu_4.style.display = "none";
            break;
        }
        case "submenu-4": {
            submenu_1.style.display = "none";
            submenu_2.style.display = "none";
            submenu_3.style.display = "none";
            submenu_4.style.display = "flex";
            break;
        }
    }
}

const go_top_btn = document.querySelector(".gotop");

go_top_btn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})