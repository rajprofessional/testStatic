function passShow(){
    let btn = document.getElementById('pass');
    if(btn.type === "password"){
        btn.type = "text";
    }
    else{
        btn.type = "password";
    }
}