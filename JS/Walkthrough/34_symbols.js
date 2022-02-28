 //symbol is used to create unique data types, even if content of two symbols is same, on checking if they are equal it will return false
 let a=Symbol();
 let b=Symbol('Identifier');
 obj={};
 obj[k1]='b'; //obj.k1 will not work for symbols since this wil seaerch for k1 string field instead of symbols
 obj[k2]='c';
obj['name']='d'; //this will add a string key field name with value d

for(key in obj){
    console.log(key); //in for in loop symbols are ignored, same is the case for stringify json
}
