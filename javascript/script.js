

function start(){
    window.open("start_the_game.html","_self");
}

let menu=document.getElementById("subMenu");
 function dropMenu(){
    subMenu.classList.toggle("open-menu")
}

document.getElementById("myh2").style.wordSpacing="17px";
window.addEventListener("scroll",function(){
    var nav = document.querySelector(".another_navmenu");
    nav.classList.toggle("sticky", window.scrollY > 80);
})