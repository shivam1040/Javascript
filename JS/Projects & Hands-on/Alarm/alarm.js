let a=document.getElementById('alarm1');
a.addEventListener('click', setalarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

function setalarm(e){
    let b=document.getElementById('alarm');
    let c=new Date(b.value);
    let now=new Date();
    let timetoalar=c-now;
    if(timetoalar>=0){
        setTimeout(() => {
            ringBell();
        }, timetoalar);
    }
    e.preventDefault();
}