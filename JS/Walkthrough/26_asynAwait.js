async function fun(){ //async funtions return promise value, ensures some work would be done eventually, can be used as a replacement for two .then used in fetch api
    console.log('a'); //this gets printed second
    let b=await fetch('https://api.github.com/users'); //goes outta function and to the next statement of second last, considering promise is pending
    console.log('c'); //prints sixth line
    let d=await b.json(); //waits until promise resolves or fails
    console.log('e'); //seventh line print
    return d; //last line prints the response of await
}

console.log('f'); //gets printed first
let g=fun(); //calls fun
console.log('h'); //third print
console.log(g); //since the promise is pending, prints promise pending
g.then((data)=>{
    console.log(data); //last line, prints the response of await
    
});
console.log('j'); //fith line print
