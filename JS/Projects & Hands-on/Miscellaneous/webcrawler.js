 let str='python'
 let link=document.links; //stores all the links in a dom
 let linksep;
 Array.from(link).forEach(function(element){
     href=element.href; //returns href tag content one by one
     if(href.includes(str)){ //returns links which only have python in it
         console.log(href);
     }
 });
 