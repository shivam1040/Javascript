function func1(){
    return new Promise(function(resolve, reject){ //promise is a window object taking a function with resolve and reject function 
        setTimeout(()=>{
            let error=true;
            if(!error){     //if error is thrown
                console.log('resolved'); //if succes then log a meesage and run resolve function
                resolve();
            }
            else{
                console.log('iunresolved');
                reject('rejected');
            }
        }, 2000);
    })
}

func1().then(function(){          //THEN and CATCH are methods of promise ,calling func 1 to get the status of promise, if resolved then 'then' function is executed else catch is executed
    console.log('resolving okay');
}).catch(function(erro1){
    console.log('bad'+erro1);
});

