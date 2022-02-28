let greet1=function greet(name='hey'){ //if no para is recieved and this is the definition then deafult hey will be taken as arguement, a function can be stored in a variable too
    console.log(name);
    return 2; //will just return 2 in case of no arguement recieved from user and no default is provided
}
greet('R'); //calling function

let obj={
    1:2,
    ha:function(){ //object content can have functions too
        return 3;
    }
}
console.log(obj.ha());

//let and const variable has block level scope, if defined outside an the same variable is defined inside a function the the value is changed
//var can be used throughout the program while, function scoped while let is block scoped 

