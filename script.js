let x = document.getElementById("btn1");
let y = document.getElementById("dimbg");
let w = document.getElementById("none");
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
let e = document.querySelector("#close");

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}

x.onclick = () => {
    y.style.display = "block";
}

w.onclick = () => {
    y.style.display = "none";
}

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    e.style.display = "block";
    menu.style.display = "none";
    navlist.classList.toggle("open");
}
e.onclick = () => {
    menu.classList.toggle("bx-x");
    e.style.display = "none";
    menu.style.display = "block";
    navlist.classList.toggle("open");
}


