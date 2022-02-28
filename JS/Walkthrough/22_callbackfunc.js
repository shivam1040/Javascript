let stud=[//assume this json object is a response from server
    {name:'A'},
    {name:'B'}
];

function enroll(stud1, callback){ //callback functions are functions within a function, callback param can be anyword and used to call other function as specified by the user
    setTimeout(function(){
        stud.push(stud1); //inserts data at end in in json stud
        str+=`<li>${stud1.name}</li>`;
        document.getElementById('3').innerHTML=str;
        callback();
}, 3000); //this function will be executed 3 secs after calling
}

str='';

function get(){
    setTimeout(function(){
        stud.forEach(function(stud2){
            str+=`<li>${stud2.name}</li>`;
        });
        document.getElementById('3').innerHTML=str;
        }, 1000);       
    }

let newstud={name:'C'};
enroll(newstud, get); //at the time enroll is called get function is called too after newstud gets pushed
//get();

 //just another method using promise

 function enroll(stud1){ 
     return new Promise(function(resolve, reject){
    setTimeout(function(){
        stud.push(stud1); //inserts data at end in in json stud
        if(!error){
            resolve();
        }
        else{
            reject();
        }
}, 3000); //this function will be executed 3 secs after calling
});
 }

 enroll(newstud).then(function(){
     get();
 });.catch(function(){
    console.log('error occured');     
 });