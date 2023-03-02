// ! Home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sideBar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", () => {
    sideBar.style.top = "0";
    btnCloseSidebar.style.display = "inline-block";
    //console.log(sideBar);
});
btnCloseSidebar.addEventListener("click", () => {
    sideBar.style.top = "-110%";
    btnCloseSidebar.style.display = "none";
});
// click outside start
document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(sideBar) && !e.composedPath().includes(btnOpenSidebar)) {
        sideBar.style.top = "-110%";
    }
});
// click outside end
// ! Home sidebar end

//! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const btnCloseSearch = document.querySelector("#close-search");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

btnOpenSearch.addEventListener("click", () => {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
});
btnCloseSearch.addEventListener("click", () => {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
});

// click outside start
document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(modalSearchWrapper[0]) && !e.composedPath().includes(btnOpenSearch)) {
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    }
});
// click outside end
//! search modal end

