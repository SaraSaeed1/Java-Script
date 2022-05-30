function remove(e){
    e.parentElement.remove();
}

var red = document.querySelectorAll(".temp-red")
var blue = document.querySelectorAll(".temp-blue")
console.log(red);
function temp(e){
    if(e.value== 'feh'){
        var feh =((Number(a[i].innerHTML)*(9/5))+32);
        for(i=0 ; i<=red.length ; i++){
            red[i].innerHTML=feh;
        }        
        for(i=0 ; i<=blue.length ; i++){
            red[i].innerHTML=feh;
        }
    }else{
        var col = (((Number(a[i].innerHTML))-32)/ 1.8);
        for(i=0 ; i<=red.length ; i++){
            red[i].innerHTML=col.toFixed(1)
        }
    }

}