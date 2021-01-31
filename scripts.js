function loaded() {
    document.getElementById("loading").classList.remove("active");
}

/* TODO: 関数にしたいがなぜか TimeOut が効かなくなる・・ 
function showCharactor(id) {
    document.getElementById(id).classList.add("show");
}
*/

window.addEventListener("load", function() {
    setTimeout(loaded, 1000);
    setTimeout(function(){document.getElementById("hachiman").classList.add("show")}, 1500);
    setTimeout(function(){document.getElementById("yui").classList.add("show")}, 1800);
    setTimeout(function(){document.getElementById("yukino").classList.add("show")}, 2000);
})

setTimeout(loaded, 5000);
setTimeout(function(){document.getElementById("hachiman").classList.add("show")}, 6500);
setTimeout(function(){document.getElementById("yui").classList.add("show")}, 6800);
setTimeout(function(){document.getElementById("yukino").classList.add("show")}, 7000);
