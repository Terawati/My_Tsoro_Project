
// for the button to open the start the game page when clicked
function start(){
    window.open("start_the_game.html","_self");
}
// for the drop down menu to appear and dissapear on clicking the tsoro in the header
let menu=document.getElementById("subMenu");
 function dropMenu(){
    subMenu.classList.toggle("open-menu")
}
// for the another_navmenu to beocme fixed and change color as user scroll
window.addEventListener("scroll",function(){
    var nav = document.querySelector(".another_navmenu");
    nav.classList.toggle("sticky", window.scrollY > 80);
})