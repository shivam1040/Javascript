let a=function(){
    console.log('b');
};

a();  //way to equate funct to variable and call it

let b=()=>{ //using arrow functions
    console.log('c');
};
b();

let c=()=>'D'; //another way to create a function equated to variable

let d=()=>({b:"c"}); //another way, first parenthesis can contain mutliple params