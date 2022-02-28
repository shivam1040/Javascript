let ele=document.getElementById('id1');
ele=ele.className; //returns class name of element in ele 
ele=ele.childNodes; //returns content inside the opening closing block of element in ele, similarly parentnode
ele.style.color='red'; //change color of element in ele to red
ele.innerText='g'; //chjanges text inside tags of element in ele, similarly innerhtml can be used to insert tags 

console.log(ele);
let ele1=document.querySelector('#id1'); //returns element having id as id1, use hash for id, use . instead of # for querying class, just write down tag type(b for <b>) to query element with queried tag and returns the first occuring tag
ele1.style.color='green'; //turns to green first div occurence

let ele2=document.getElementsByClassName('child1'); //get all elements with classname child, returns as  collection so can be accesed as ele2[0], similarly ele2[0] can be prefixed with geteleme... to return all the elements inside 0 index with queried input
ele2=document.getElementsByTagName('div'); //get all div tags elements

Array.from(ele2).forEach(eLement =>{ //class for loop can be used too
    Element.style.color='blue'; //changes entire element in ele to blue
});
