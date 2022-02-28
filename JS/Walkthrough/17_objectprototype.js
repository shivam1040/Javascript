let carobj={ //object literal created using Object.prototype
    name:'A',
    make:'B',
    func:function(){
        console.log('run');
    }
}
//console.log(carobj);
function obj1(a){ //constructor
    this.make=a;
}

obj1.prototype.getmake=function(){ //adds getmake gets added to object.prototype, ensures no changing in object attributes
    return this.make; //object prototype can be changed by using constructor not object literals, avoid overriding Object.prototype, always make yoour constructor and change its prototype
};

let obj2=new obj1('a'); //creating object obj2 and calling func obj1
obj2.getmake(); //this is valid since getmake has been added to prototype
console.log(obj2);
