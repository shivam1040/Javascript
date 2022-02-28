class Lib{
    constructor(books){
        this.books=books;
        this.issued={};
    }

    getbooks(){
        this.books.for.forEach(a=>{
            console.log(a);
        });
    }

    issueboo(book, user){
        if(this.issued[book]!=undefined){
        this.issued[book]=user;
        }
    }

    returnbook(book){
        delete this.issued[book];
    }
}

let obj=new Lib(['a', 'b', 'c']); //intiallizing obj and passing array to constructor
obj.getbooks();
