function remove(e){
    e.parentElement.remove();
}


function temp(e){
    console.log(e.value);
    var red = document.querySelectorAll(".temp-red")
    var blue = document.querySelectorAll(".temp-blue")

    if(e.value == "feh"){
        for(var i=0 ; i<=red.length ; i++){
            red[i].innerHTML=((Number(red[i].innerHTML))*(9/5))+32;
        }        
        for(var i=0 ; i<=blue.length ; i++){
            blue[i].innerHTML=((Number(blue[i].innerHTML))*(9/5))+32; 
        }
    }else{
        for(var i=0 ; i<=red.length ; i++){
            var col = (((Number(red[i].innerHTML))+32)/ (1.8));
            red[i].innerHTML=col.toFixed()
        }
        for(var i=0 ; i<=blue.length ; i++){
            var col = (((Number(blue[i].innerHTML))+32)/ (1.8));
            blue[i].innerHTML=col.toFixed()
        }
    }

}