//Using JS Prototype

function book(name, auth, type){ //constructor
    this.name=name;
    this.auth=auth;
    this.type=type;
}

function display(){

}

display.prototype.add=function(book){
    let table=document.getElementById('t1');
    let str=`<tr>
    <td>${book.name}</td>
    <td>${book.auth}</td>
    <td>${book.type}</td>
  </tr>`;
table.innerHTML+=str;
}; //adding add and clear function to the prototype of display

display.prototype.clear=function(){
    document.getElementById('form1').reset(); //resets the content inside placeholders of forms 
};

//let aa=document.getElementById('submit1');
//aa.addEventListener('click', bookadd);

function bookadd(e){
    let a=document.getElementById('book1').value; //gets the value of element
    let c=document.getElementById('Author1').value;
    let d;
    if(document.getElementById('f1').checked){ //checks if radio button is clicked
        d=document.getElementById('f1').value;
    }
    else if(document.getElementById('f2').checked){
        d=document.getElementById('f2').value;
    }
    else if(document.getElementById('f3').checked){
        d=document.getElementById('f3').value;
    }

    let b=new book(a, c, d);
    let disp=new display();
    disp.add(b);
    disp.clear();
    console.log(b);
    e.preventDefault(); //inbuilt function to catch the event e and prevent page from reloading when submit button is clicked
}  //one can use alert success failure status of book entry, do use settimeout function to remove alert, set the innerhtml of alert block to blank

setTimeout(function(){
    
}, 2000);

