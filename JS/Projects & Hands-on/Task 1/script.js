var button=document.querySelector(".button");
button.addEventListener("click", conversion);

function conversion(){
    let km=document.getElementById("input").value;
    document.getElementById("m").innerText=km*1000;
    document.getElementById("cm").innerText=km*1000*100;
    document.getElementById("in").innerText=km*39370.1;
    document.getElementById("ft").innerText=km*3280.84;
}