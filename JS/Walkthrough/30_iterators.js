function fruititerator(a){
    let index=0;
    return{  //returns a function
        next: function(){ //this functions retunrns value so ultimately an object is returned
            if(index<a.length){
                return{
                    b:a[index++],
                    done:false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}

let arr=[1, 2, 3, 4];
console.log(fruititerator(arr).next().b); //using iterator function, one function call is equal to one iteration
