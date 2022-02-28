let carobj={ //object literal
    name:'A',
    make:'B',
    func:function(){
        console.log('run');
    }
}

function car(a, b){ //creating constructor for car
    this.name=a;
    this.make=b;
    this.func=function(){
        console.log(`${this.name}ss`);
    };
}
 car1=new car('1','2'); //crearting new object and calling constructor