function edit(e){
    console.log(e.parentElement.parentElement.querySelector('.name').querySelector('h1').innerText="Mohammed S");
        // innerText="Logout";
}
var howMany=2;
var numFriend = 418;

function  addFriend(e){ 
    //subtract hte number    
    e.parentElement.parentElement.parentElement.parentElement
    .querySelector('.black').querySelector('h2')
    .innerText=howMany=howMany-1;

    //add number in the number of friend
    console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement
        .querySelector('.friend').querySelector('.black').querySelector('h2').innerText=numFriend=numFriend+1);

        //remove the from requests 
    e.parentElement.parentElement.remove(e);
}

function  subFriend(e){ 
    //subtract hte number    
    e.parentElement.parentElement.parentElement.parentElement
    .querySelector('.black').querySelector('h2')
    .innerText=howMany=howMany-1;
        //remove the from requests 
    e.parentElement.parentElement.remove(e);
}