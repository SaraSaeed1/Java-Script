var x = document.querySelector("#like1");
var y = document.querySelector("#like2");
var z = document.querySelector("#like3");
var count1 =0;
var count2 =0;
var count3 =0;


console.log(x);
function add1(){
    count1++;
    x.innerText= " like(s) "+ count1;
    console.log(count1);
}

function add2(){
    count2++;
    y.innerText= " like(s) "+ count2;
    console.log(count2);
}

function add3(){
    count3++;
    z.innerText= " like(s) "+ count3;
    console.log(count3);
}