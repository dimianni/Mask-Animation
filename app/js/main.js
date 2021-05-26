

var container = document.querySelector(".container");
var mask = document.querySelector(".mask");
var blur = document.querySelector(".blur");
var maskContent = document.querySelector(".mask-content");

window.addEventListener("load", onMove);

container.addEventListener("mousemove", onMove);

function onMove(e) {

    var x = e.pageX - 150;
    var y = e.pageY - 150;

    gsap.set(mask, {
        left: x,
        top: y
    });

    // gsap.set(blur, {
    //     x: x,
    //     y: y
    // });

    // Картинка с контентом идет в противоположном направлении мышке, поэтому создается ощущение что она стоит на месте

    gsap.set(maskContent, {
        left: -x,
        top: -y
    });
}



