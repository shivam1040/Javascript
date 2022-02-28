var button=document.querySelector(".add");
button.addEventListener("click", add);
var stateCity = {};
var option="<option></option>";

function add(){
    let state=document.getElementById("lname").value;
    let city=document.getElementById("wname").value;
    if(!stateCity.hasOwnProperty(state)){
        stateCity[state] = new Array();
        stateCity[state].push(city);
        option+="<option>"+state+"</option>";
        document.getElementById("state").innerHTML=option;
    }
    else{
        stateCity[state].push(city);
    }
    document.getElementById("city").innerHTML="";
}

var stateOption = document.getElementById("state");
stateOption.addEventListener('change', citiesOptions);

function citiesOptions(e){
    let option="";
    stateOption=e.target.value;
    let cities=stateCity[stateOption];
    for(let city of cities)
        option+="<option>"+city+"</option>"
    document.getElementById("city").innerHTML=option;
}