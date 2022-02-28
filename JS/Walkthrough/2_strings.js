//var.concat(string); concates strings
//var.length; returns string var length
let html='aaaAA';
let name1=1;
html.toLowerCase();
html[1]; //gives,second character of html, charAt(1) can be used to
html.indexOf('1'); //first index, lastIndexOf to get first occurence from last
html.endsWith('1'); //tells if html ends with 1
html.includes('1'); //checks if 1 is present in html
html.substring(1,3); //returns string from 1 to 2
html.slice(-4); //returns last four string of html
html.split(' '); //splits html into array by delimiter ' '
html.replace('a', 't'); //replaces first occurence of a with t in html
html=`hell ${name1}
gggg`; //enables to write freely  and insert variablr in between strings

document.body.innerHTML=html; //displays on screen
