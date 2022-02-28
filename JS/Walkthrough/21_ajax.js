//ajx=js+xml
//ajax uses xmlhttprequest obj, also known as xhr obj
//purejs is vanilla js, no importing any external library
let event1=document.getElementById('1');
event1.addEventListener('click', clicked);

function clicked(){
    console.log('a');
    let xhr=new XMLHttpRequest(); //cresting xml obvject
    //xhr.open('GET', 'a.txt', true); //using open method to initiate get request to retrieve a.txt contnent it could be a website too, and true stand for asynchronous calls allowed
    xhr.onprogress=function(){
        console.log('progress'); //message to dispaly when GET is executing, useful for loaders/spinners
    };

    xhr.onreadystatechange=function(){ //old methods, there are 5 states, and for each state one can perform tasks accordingly, refer to mozilla for refrence on ready states
        console.log('state is', this.readyState);
    };

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json'); //specefies response header

    xhr.onload=function(){
        if(this.status===200){  //ensures that the below code is run when responsecode recieved after get is 200
        console.log(this.responseText); //message to give after get is executed, responsetext gives the content of a.txt
        }
    };
    //xhr.send(); //intitates the sending of get request
    xhr.send('{"name":"test","salary":"123","age":"23"}'); //post data sent in json format
}

let event2=document.getElementById('3');
event2.addEventListener('click', clicked1);

function clicked1(){
    console.log('a');
    let xhr=new XMLHttpRequest(); //cresting xml obvject

    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload=function(){
        if(this.status===200){  //ensures that the below code is run when responsecode recieved after get is 200
        let obj=JSON.parse(this.responseText); //response fromk get is in string so for use we convert it into json which gives accessebvility using their key values
        let str='';
        for(a in obj){
            str+=`<li>${obj[a].employee_name}</li>`;
            if(a===10){ 
                break;
            }
        }
        event2.innerHTML=str;
        }
    };
    xhr.send(); //intitates the sending of get request
}