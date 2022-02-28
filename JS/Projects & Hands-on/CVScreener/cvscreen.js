    let a=[  //object array
        {
            name:'A',
            age:'22',
            skill:'Java'
        },
        {
            name:'B',
            age:'22',
            skill:'Python'
        },
        {
            name:'C',
            age:'22',
            skill:'Java'
        },
        {
            name:'D',
            age:'22',
            skill:'C       '
        }
    ];
    
    function cviterate(aa){
        let index=0;
        return{
            next:function(){ //next is the name of function, syntax for iterator function
                return index<aa.length?{value:aa[index++], done:false}:{done:true};
            }
        };
    }

    let c=cviterate(a);
    let b=document.getElementById('2');
    b.addEventListener('click', cvdet);
let str="";
function cvdet(){
    let d=document.getElementById('1');
    let e=c.next().value; //everytime next func is called an iteration occurs
    if(e!=undefined){
    str=`<ol class="list-group list-group-numbered">
    <li class="list-group-item">Name: ${e.name}</li>
    <li class="list-group-item">Age: ${e.age}</li>
    <li class="list-group-item">Skill: ${e.skill}</li>
  </ol>`
  d.innerHTML=str;
    }
    else{
        alert('end list');
    }
}
cvdet(); //to populate data as soon as page is opened