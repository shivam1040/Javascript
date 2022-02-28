class Employee{ //es6 ways for ease of oops
    constructor(nam, exp, div){
        this.name=nam;
        this.experience=exp;
        this.division=div;
    }

    name1() { //way to create function in es6 class
        return 'a';
    }
    static year(a, b){ //this can be used without creating object
        return a+b; //in static methods this cant be used
    }
}

let obj=new Employee('a', 'b', 'c');
console.log(obj);
console.log(Employee.year(1, 2)); //way to call static metghods inside class

 class Programmer extends Employee{
    constructor(nam, exp, div, lang){ //constructor runs when an object is created for the give class
        super(nam, exp, div); //calls constructor of base class
        this.language=lang;
    }
        
 }