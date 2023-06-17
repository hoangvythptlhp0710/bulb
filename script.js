function change(){
    var bulb = document.getElementById('image');
    var button = document.getElementById('turnOn');
    if(image.src.match("offBulb")){
        image.src = "./static/onBulb.png";
        button.innerHTML = "Bat den";
    }else{
        image.src = "./static/offBulb.png";
        button.innerHTML = "Tat den";
    }
}