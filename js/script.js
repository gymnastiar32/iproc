function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(button => {
                button.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

function runCollapse() {
    document.querySelectorAll(".collapse__sidebar").forEach(sidebar => {
        sidebar.addEventListener("click", () => {
            const collapseContent = sidebar.nextElementSibling;

            sidebar.classList.toggle("collapse__sidebar--active");
            if (sidebar.classList.contains("collapse__sidebar--active")) {
                collapseContent.classList.add("collapse__content--active");
            } else {
                collapseContent.classList.remove("collapse__content--active")
            }
        });
    });
}

var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var imagesWrap = document.querySelector('.images__wrap');

function loadPics() {
    for (var i = 1; i < images.length; i++) {
        var img = new Image();
        img.src = "img/logo-client/" + i + ".png";
        imagesWrap.appendChild(img);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    runCollapse();
    loadPics();
})