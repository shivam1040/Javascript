let box=document.getElementById('screen');
let but=document.querySelectorAll('button');
let str=""
for(item of but){
    item.addEventListener('click', (e)=>{
        let text=e.target.innerText;
        if(text!='='){
        str+=text;
        
        box.value=str;
        }

       else if(text=='='){
            box.value=eval(str);
        }
        if(text=='C'){
            box.value="";
        }
     
    });
}

