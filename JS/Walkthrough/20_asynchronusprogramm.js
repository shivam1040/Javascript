//asynchronus multiple blocks of instructions at once

setTimeout(() => {
   for(let i=0; i<999; i++){
       console.log(i);
   } 
}, 100);
console.log('h'); //H IS printed while for loop is getting executed and timeout for for loop is 100ms

//Async/await, callbacks, promises provcide asynchronous functionalities
