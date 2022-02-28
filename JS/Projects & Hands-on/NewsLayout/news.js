let a=document.getElementById('accord1');

let str1="";

let xhr=new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=26c18b633ecc434c8dd9ef54d38c54f2', true);

xhr.onload=function(){
    if(this.status===200){
        let b=JSON.parse(this.responseText);
        b=b.articles; //gives only article memeber of the recieved json obj
        for(let ax in b){
            let str=`<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
  <button class="accordion-button collaspsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${ax}" aria-expanded="false" aria-controls="collapse${ax}">
    ${b[ax].title}
  </button>
</h2>
<div id="collapse${ax}" class="accordion-collapse collapse hide" aria-labelledby="heading${ax}" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>${b[ax].description}</strong> ${b[ax].content}
  </div>
</div>
</div>`;

str1+=str;
a.innerHTML=str1;

        }
    }
}
xhr.send();

