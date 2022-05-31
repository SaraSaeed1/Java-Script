
function add(e){
    var x= (e.parentElement.querySelector("p #likes")) 
    let count=parseInt(x.innerText);
    x.innerText= count+1;
}