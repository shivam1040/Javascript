function get(){
    fetch('ajax.txt').then((response)=>{ //at the place of ajax.txt url can be given
        console.log('a');
        return response.text();
    }).then((data)=>{ //using arrow function to pass data, two .then means that if response is okay then execute second then block
        console.log(data); //returns ajax.txt content   
    });
}

//get(); 

function get1(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{ //at the place of ajax.txt url can be given
        console.log('a');
        return response.json(); //returns in form of json object
    }).then((data)=>{ //using arrow function to pass data, two .then means that if response is okay then execute second then block
        console.log(data); //returns ajax.txt content   
    });
}

//get1();

function post1(){ //way to post data using fetch
    let data=1;
    let postparam={ //this defines the headers for POST data
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data) //to ensure that only string data gets posted, for the ease of use
    };

    fetch('https://reqres.in/api/users', postparam).then((response)=>{ //at the place of ajax.txt url can be given
        console.log('a');
        return response.json(); //returns in form of json object
    }).then((data)=>{ //using arrow function to pass data, two .then means that if response is okay then execute second then block
        console.log(data); //returns ajax.txt content   
    });
}

post1();