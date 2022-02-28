let a=/ a bc /g; //g is global flag which is optional and it returns the number of occurences subsequent calls of given string in regex and its index
//i flag is used to check irrespective of uppercase lowercase etc.
let b='c abc d';
console.log(a.exec(b)); //this returns the index of occurence of regex string a in b, either returns array or null fo not present
console.log(a.exec(b)); //this will return the second occurence of string a, if present else null, this feature can be used with loops
//the exec returned items can be accesed by equating it to a variable, then using variablename.item too acces the returned data

console.log(a.test(b)); //returns true or false depending upon the presence of regex string in b

console.log(b.match(a)); //this matches string with regex and return result array or null

console.log(b.search(a)); //retuns index of first occurence after matching or -1

b.replace(a, 'A'); //replaces the regex pattern a in string b with A, use global flag to replace all occurences

