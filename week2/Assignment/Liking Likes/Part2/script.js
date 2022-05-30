
function add(e){
    var likes =e.parentElement.querySelector("p #likes");
    let count=parseInt(likes.innerText);
    likes.innerText= count+1;
}