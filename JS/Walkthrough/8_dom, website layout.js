//DOM-document object model
let a=document.all; //gives collection of entire tags in html document
a=window.document.body; //will only give tags of html body, forms to get forms, links to get href elements
Array.from(a).forEach(function(element){ //the above collection can be converted to array by using, Array.from
    console.log(element)
});
a=document.links[0].href; //gives link of href element 0