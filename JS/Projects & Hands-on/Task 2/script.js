var button=document.querySelector(".check");
button.addEventListener("click", checkStatus);

function checkStatus(){
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let dob=document.getElementById("birthday").value;
    let age=((new Date().getTime()-new Date(dob).getTime())/31536000000).toFixed(0);
    document.getElementById('ageYear').placeholder=age;
    if((gender='m' && (age>=25 && age<=65)) || (gender='f' && (age>=21 && age<=71)))
        document.getElementById("final").innerText="Eligible"
    else
    document.getElementById("final").innerText="Ineligible" 
}