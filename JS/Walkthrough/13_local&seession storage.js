localStorage.setItem('A', '1'); //stores locally in chrome in form of key value pairs
let arr=['c', 'd', 'e'];
localStorage.setItem('f', JSON.stringify(arr)); //way to store arry as value
localStorage.getItem('A'); //gets value corresponding to key, for not existing key returns null
localStorage.clear(); //clears localstorage
localStorage.removeItem('A'); //removes only A key value 
arr=JSON.parse(localStorage.getItem('f')); //way to get value in array format since local storage doesn't support array so arry gets converted to string and to avoid it we use JSON, JSON.parse takes string and returns object

//for session, use sessionStorage instead of localstorage