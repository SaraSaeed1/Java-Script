var count =1;
var x = document.querySelector("#like");

console.log(x);
function add(){
    count++;
    x.innerText= " like(s) "+ count;
    console.log(count);
}