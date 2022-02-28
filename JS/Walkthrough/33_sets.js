let set1=new Set();
set1.add(1);
let set2=new Set([1, true, {a:'b', b:'c'}]); //another way to initiallize set
set1.size;
set1.has(1); //returns true or false if set1 has 1 in it
set1.delete(1);

for(let item of set1){
    console.log(item);
}

set1.forEach((item)=>{
    console.log(item);
});

//set can be converted to array using Array.from