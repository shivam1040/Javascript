let ele=document.createElement('li'); //creates element tag li
ele.className='child1';
ele.id='2';
ele.setAttribute('title', 'title1'); //sets attribute for element in ele <li title='title1></li>
ele.innerText='Hey'; //adds text inside li tag, use innerhtml to add html tags
let ele3=document.createTextNode('heyuy'); //text to add inside tags of elements in ele
ele.appendChild(ele3); //this is same as below two line but doesn't append anything in html
let ele2=document.querySelector('ul.class4');
ele2.appendChild(ele); //appends element ele in ele2

//replace element
let ele4=document.createElement('h3');
ele4.id='3';
ele4.className='child4';
let ele5=document.createTextNode('hows');
ele4.appendChild(ele5);
ele.replaceWith(ele4); //this replaces ele with ele4 in html dom, but this changes aren't seen in html body only in js
let ele6=document.getElementById('3');
ele6.replaceChild(ele, document.getElementById('4')); //replaces child id 4 of ele6 with ele variable contents

//remove element
ele6.removeChild(document.getElementById('5')); //removes child node id 5 

ele=ele.getAttribute('id'); //gives id of ele, hasAttribute to check if element has class or id etc in it
ele.removeAttribute('id'); //removes attribute id


