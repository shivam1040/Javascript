//regex.source returns the content in regex expression, regex is the regex expression variable name
let a=/^abc/; //^ensures that the matches are positive when the string starts with harr]
a=/abc$/; //$ ensures that matches are positive when the string ends with abc
a=/a.bc/; //. ensures that the matche is positve when abc in string has only one character present at the place of dot
a=/a*bc/; //* ensures that match is positive when * in abc in string can be replace with one or more characters
a=/a?bc/; //? ensures that match is positve when abc is present or bc is present , basically a can be present or not
a=/a\*bc/; //\ ensures that a*bc is matched in the string

//regex character sets

a=/a[a-z]bc/; //this ensures that match is positive when any character b/w abc ranging from a-z is found in string, [aty] mean can be any character from a, t or y
//[a-zA-Z] ensures charaters are between upper and lowercase of a-z/A-Z
//[yu0-9] ensures that y, u or digit between 0-9 are present
a=/a[^aty]bc/; //this ensures that match is positive only when abc doesent have a, t, y at the given index in the string

//Quantifiers to check quantitiy of characters
a=/a{0, 2}bc/; //this ensures that a in the matching literal of string is repeated either 0 to twotimes
a=/(abc){2}/; //this ensures that abc is repeated twice in the matching literal of sting, abcabc
a=/(a){2}([0-9]r){2}/; //this ensures a is repeated twice, any digit between 0-9 & r is r

//Shorthand characters
a=/\wabc/; //\w ensures that it's replaced by _ or alphnumeric character in string literal to return positive
a=/\w+abc/; // \w+ ensures that abc can be preceded with any qty of alphanumeric characters
a=/\Wabc/; // \W ensures that the math is positive when \W can be replaced by non word character, basically symbol
a=/\d999/; // \d ensures that match is postive when d can be replaced by a digit
//  \D use for non digit character
a=/\ska/; // \s or\t is used to match positve when \s can be replace by whitespace or tab(use t instead of s for detecting tab)  
a=/abc\b/; // \b ensures that after abc there exists another word, basically separated by space

//Assertion
a=/ab(?=c)/; //this ensures that match is positve only when there is c after ab in the literal of string
a=/ab(?!y)/; //same as above but ensures that ab is not suffixed with y