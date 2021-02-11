function loaded() {
    document.getElementById("loading").classList.add("loaded");
    document.getElementById("loader").classList.add("loaded");
}

/* TODO: 関数にしたいがなぜか TimeOut が効かなくなる・・ 
function showCharactor(id) {
    document.getElementById(id).classList.add("show");
}
*/

window.addEventListener("load", function() {
    setTimeout(loaded, 1000);
    setTimeout(function(){document.getElementById("hachiman").classList.add("show")}, 1800);
    setTimeout(function(){document.getElementById("yui").classList.add("show")}, 2000);
    setTimeout(function(){document.getElementById("yukino").classList.add("show")}, 2100);
})

setTimeout(loaded, 5000);
setTimeout(function(){document.getElementById("hachiman").classList.add("show")}, 6500);
setTimeout(function(){document.getElementById("yui").classList.add("show")}, 6800);
setTimeout(function(){document.getElementById("yukino").classList.add("show")}, 7000);


const targetElement = document.querySelectorAll(".posts");
document.addEventListener("scroll", function() {
    for(let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})
