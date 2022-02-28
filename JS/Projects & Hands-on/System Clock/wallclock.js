function clock(){
    let a=new Date();
    let b=a.getHours();
    let c=a.getMinutes();
    let d=a.getSeconds();
    let e=(a<12)?"PM":"AM";
    document.getElementById('clock').innerHTML=b+":"+c+":"+d+" "+e;
}