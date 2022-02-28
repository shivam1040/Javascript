document.getElementById('1').addEventListener('click', function(e){  //function is executed when click event on id 1 element is captured, mouseover event for hover arrow
    console.log(e); //e tells about the type of event captured, e.target will give element definition, e.target.classname to return class, e.target.classlist gives multiple class names into a list can be converted to array using array.from
    e.offsetX; //gives at what distance from element was clicked
    e.clientX; //gives distance relative to browser
    //location.href='//google.com'; //takes to link on click
});

let ele=document.getElementById('btn');
btn.addEventListener('click', fun1); //dblclick event too, mousedown for any middle/rmb mouse click, mouseenter/mouseleave to check arrow hovering in/out

function fun1(e){
    console.log("ok", e);
    e.preventDefault(); //bypasses the default behaviour used in case of form submits, redirection to link on clicking etc.
}

document.querySelector('.contain').addEventListener('mousemove', function(e){
    document.body.style.background=`rgb(${e.offsetX}, ${e.offsetY}, ${(e.offsetX-e.offsetY)/2})`; //changes background color according to mousemovement
});
