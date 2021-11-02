document.querySelector(".block").onmousemove = function (event) {
    event = event || window.event;
    console.log(event);
    document.querySelector(".x").innerHTML = event.offsetX + ", ";
    document.querySelector(".y").innerHTML = event.offsetY;
};

document.querySelector(".page").onmousemove = function (event) {
    event = event || window.event;
    console.log(event);
    document.querySelector(".x2").innerHTML = event.offsetX + ", ";
    document.querySelector(".y2").innerHTML = event.offsetY;
};
