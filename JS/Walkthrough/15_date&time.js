let today=new Date(); //gives today's date
let otherdate=new Date('8-4-2003 04:54:08');
otherdate=new Date('June 13 1976'); //another way
otherdate=new Date('01/01/1976'); mm/dd/yy
otherdate.getDay(); //gives the day count, starting from sunday as 0
otherdate.getDate();
otherdate.getTime(); //gets seconds passed since 1970
otherdate.setDate(23); //sets date to 23