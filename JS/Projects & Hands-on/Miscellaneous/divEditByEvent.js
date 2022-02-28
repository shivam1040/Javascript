//insert div in headings, give edit content facility on mouse click and save it into local storage on click  away
let div=document.createElement('div');
let text=document.createTextNode('Editable content');
let val=localStorage.getItem('text');

if(val==null){
div.appendChild(text);
}
else{
text=document.createTextNode(val);
div.appendChild(text);
}

div.setAttribute('id', '1A');
let cont=document.querySelector('.contain');
let head=document.getElementById('1');
cont.insertBefore(div, head); //inside cont, inserts div before head

div.addEventListener('click', function(){
    let counttextar=document.getElementsByClassName('textar').length; //gets the length of content in textarea tag
    if(counttextar==0){ //ensures  textbox isn't reseted always
        let html=div.innerHTML; //storing innercontent of div in html variable
        div.innerHTML=`<textarea class='textar' id='tex' rows='3'>${html}</textarea>`; //a waay to create textbox
    
    }
    let texta=document.getElementById('tex');
    texta.addEventListener('blur', function(){ //blur checks for mouse click away, on different place
        div.innerHTML=texta.value; //this works with getelebyid only, gets value of texta
        localStorage.setItem('text', div.innerHTML); //stores innert html content in localstorage
    });
});