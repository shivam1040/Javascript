var elementObj;
var result=[];
var links;
async function fetchTest() {
    let response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://time.com')}`);
    elementObj = await response.json();
    elementObj= await elementObj.contents;
    let parser = new DOMParser();
    const doc = parser.parseFromString(elementObj, 'text/html');
    links=doc.querySelectorAll('ol li article div h2 a');
}

(async() => {
    await fetchTest();
    console.log(links);
    for(let i=0; i<links.length; i++){
        result.push({
           "title": links[i].innerHTML,
           "link": "https://time.com/"+links[i].pathname
        });
    }
    document.write(JSON.stringify(result));
})();