const proto={
    a:'1',
    b:'2'
};

const obj=Object.create(proto); //this creates objject obj using proto
obj.name='A';
console.log(obj); 

const obj2=Object.create(proto, { //another way to add proto, writable is important for making changes
    name:{value:'B', writable:true},
});
obj2.name='C'
console.log(obj2);

function Employee(a, b){ //constructor employee
    this.a=a;
    this.b=b;
}

Employee.prototype.slo=function(){ //adds function slo to prototype of employee
    return `this ${this.a}`;
};

let obj3=new Employee('1', '2'); //creating object of employee
console.log(obj3.slo());

function Prog(a, b, c){ //constructor
    Employee.call(this, a, b); //inheritance and calling employee constructor
    this.c=c; //changes the c of object to constructor c
}

Prog.prototype=Object.create(Employee.prototype); //inheritance to equate one prototype to another

Prog.prototype.constructor=Prog; //manually setting the constructor of prog to prog function

let obj4=new Prog('a', 'b', 'c');
console.log(obj4);
