let pbox=document.getElementById('parametersBox');
pbox.style.display='none';
let jsradio=document.getElementById('7');
jsradio.addEventListener('click', ()=>{
    pbox.style.display='none';
    document.getElementById('5').style.display='block' //block is to show none is to hide
});
let curadio=document.getElementById('6');
curadio.addEventListener('click', ()=>{
    document.getElementById('5').style.display='none'
    pbox.style.display='block';
});

function getElementFromString(string) { //converting string to dom
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
let addedParamCount = 0;

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                    </div>
                    <button class="btn btn-primary deleteParam"> - </button>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
        // Add an event listener to remove the parameter on clicking - button
        let deleteParam = document.getElementsByClassName('deleteParam'); //this will get the entire element but only delete the one which has been clicked as per the below code
        for (item of deleteParam) {
            item.addEventListener('click', (e) => { //e points to the element which trigger the element
                // TODO: add a confirmation box to confirm parameter deletion
                e.target.parentElement.remove(); //e.target is the element and it will remove the parent element string, which is basically the entire parameter block of the clicked - button
            })
        }
        addedParamCount++;
    });

    let submit=document.getElementById('8');
    submit.addEventListener('click', ()=>{
        document.getElementById('exampleFormControlresponse2').value="wait";
        let url=document.getElementById('1').value;
        let req=document.querySelector("input[name='requestType']:checked").value; //this will return the value of radio button which has been marked and thier name tag will be request type
        let con=document.querySelector("input[name='content']:checked").value;
        let data;
        if(con=='Custom'){
            data={};
            for(i=0; i<addedParamCount+1; i++){ //+1 is done to run the loop atleast once if no extra param is added
                if(document.getElementById('parameterKey'+(i+1))!=undefined){ //in case one param box is deleted by the user, to ensure loop doesn't break at that index this check is made
                let key=document.getElementById('parameterKey'+(i+1)).value;
                let value=document.getElementById('parameterValue'+(i+1)).value;
                data[key]=value;
            }
            data=JSON.stringify(data);
        }
        }
        else{
            data=document.getElementById('exampleFormControlTextarea').value;
        }

        if(req=='GET'){
            fetch(url, {
                method:'GET'
            }).then(response=>response.text()).then((text)=>{
                document.getElementById('exampleFormControlresponse2').value=text;
            });
        }
        else{
            fetch(url, {
                method:'POST',
                body:data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }  
            }).then(response=>response.text()).then((text)=>{
                document.getElementById('exampleFormControlresponse2').value=text;
            });
        }
    });