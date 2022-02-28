let name1='h' //var, let, const are variable types in js
//variables follow block scope global scope
 //let ensures initiallization of same variable with prefix let multiple times
 //prim datatype- string, number, boolean, null, undefined, symbol
 //ref datatype- array, object, function, dates
 console.log((typeof name1)); //returns datatype can be used for identifying functions too
 let marks={ //intialiizing object 
     1:2,
     3:4
 }; //object memory is in heap, primitive is in stack
name1=String(1); //converts number to string
name1= new Date(); //returns date obj
//array can be converted to strings too
//name1.toString(); is alternative
//parseInt(name1) conversion of string to int
//var.toFixed(2); show upto two dec places

//str1+int1, will concanetate and this is called type coercion

//json object
//jsonobj['r']; this means that value of r key in jsonobj is accessed