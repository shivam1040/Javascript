let a=document.querySelector('.imgbox');
let b=document.getElementsByClassName('emptybox');
a.addEventListener('dragstart', (e)=>{
    console.log('start');
    e.target.className+=' hold'; //e event needs to be passed to access current dragged element, using this.className will not work since this will point to window object
    //in the above space is prefixed with hold because to give multiple classnames to a element, space is used
    setTimeout(()=>{
    e.target.className='hide';
    }, 0); //settimeout with 0 value means, the instruction inside is run only when all other instruction in the function is run
});

a.addEventListener('dragend', (e)=>{ //drag events only work with draggable elements
    e.target.className='imgbox'; //this done to change the classname fromf hide to imgbox, without doing so image will not appear in new box after dropping
console.log('end');
});

for(c of b){ //loop for the elements with classname emptybox
    c.addEventListener('dragover', (e)=>{ //e signifies passing of event object, passes the element which is taking part in event
        e.preventDefault(); //to prevent the default behaviour of unable to drop the element
    });

    c.addEventListener('dragenter', ()=>{

    });

    c.addEventListener('dragleave', ()=>{

    });

    c.addEventListener('drop', (e)=>{
        e.target.append(a); //to add image to the box when drag is drooped
    });
}