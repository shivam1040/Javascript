let ele=document.querySelector('.child1');
ele.childNodes; //returns child elements of elements in ele, childnode considers text, comments, lines
ele.children; //only considers elements  with html tags
ele=ele.childNodes[0].nodeName; //returns type of element at index 0   
ele=ele.childNodes[0].nodeType; //returns category of element, 1 for element, 2 for attribute, 3 for text node, 8 for comment, 9 for document, 10 for doctype
ele=document.querySelector('div.child1'); //returns div elements having class name child1
ele=ele.children[1].children; //can traverse for elements like this
ele=ele.firstChild; //returns first content, could be text, tag anyhting
ele=ele.firstElementChild; //returns first html tag of elements in ele, similarly first can be replace with last for functionalitites from last
ele=ele.childElementCount; //counts the number of html tags
ele=ele.firstElementChild.parentNode; //returns nearest coonected content
ele=ele.firstElementChild.nextElementSibling; //gives nearest connected child html tag