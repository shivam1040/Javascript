let map1=new Map();
let key1='a', key2={}, key3=function(){}; //empty object and empty function
map1.set(key1, 'string'); //key1 is key while string is value of it
map1.set(key2, 'empty object');
map1.get(key1);
map1.size; //gives size of map

for(let [key,value] of map1){ //use let key of map1.keys() for getting only keys
    console.log(key, value);
}

map1.forEach((key, value)=>{ //another way to get key value using iteration
    console.log(key);
    console.log(value);
});

let arr=Array.from(map1.keys()); //converts map keys to array
