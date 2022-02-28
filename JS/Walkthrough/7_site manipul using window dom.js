console.log(window); //displays methods inside window object(inbuilt global)
alert('h'); //displays content in overlay box
let a=prompt('h'); //displays h, takes an input and stores when a is called
a=confirm('you sure?'); //gets okay/cancel type input from user by displaying overlay
a=window.document; //stores the entire html content in a
a=window.innerHeight; //returns current height of page, similarly innerwidth
a=scrollX; //returns scroll value along X, same as window.scrollX, scrollY can be used too
a=location.toString(); //gives the url in string format, location is an inbuilt object with its own methods, href for redirection, reload for refresh
window.history.go(-1); //takes one webpage back, similar to clicking back button, window.history returns number of backs available