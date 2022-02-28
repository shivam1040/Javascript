let a=document.getElementById('2');
let b=document.getElementById('3');

a.addEventListener('blur', ()=>{
    let c=/([a-zA-Z]){2,6}/;
    let str=a.value;
    if(c.test(str)){
        console.log('ok');
        a.classList.remove('is-invalid');
    }
    else{
        a.classList.add('is-invalid');
    }
}); 

//email regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

b.addEventListener('blur', ()=>{
 
});