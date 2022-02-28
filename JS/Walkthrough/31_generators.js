function* numberSgen(){ //used in the cases when one wants to return random numbers or calculastions
    let i=0;
    while(true){
        yield i++;
    }
}

console.log(numberSgen.next().value);

//let obj{....}, for(let key in obj){obj[key]}// a way to iterate throught object array and return values by using key
//for(let a in obj), in is used to get the keys to use to for returning value or whatsoeve
//for(let a of str), of is used on iterables, for instance string can be iterated character by character
