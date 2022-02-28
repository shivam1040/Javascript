let a, b;
[a, b]=[1, 2]; //will assign 1 to a and 2 to b
[a, b, c, ...d]=[1,2,3,4,5,6,7,89]; //1 2 3 will go to a b c and remaing will get stored as arreay in d
({a, b, c, ...d}={a:1, b:2, c:3, d:5, e:6}); //a b c will contain 1 2 3 as object and d will contain d:5 and e:6 as object cvontent
let ab=[1, 2, 3];
[a, b, c]=ab; //stores 1 for a 2 for b and so

let lap={
    a:1,
    b:2,
    start:function(){
        console.log(3);}
    }

let {a, b}=lap;
console.log(a, b);