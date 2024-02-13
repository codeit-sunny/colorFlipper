let btn = document.getElementById('btn');

  btn.onclick = function colorChange(){
    red = Math.ceil(Math.random()*255);
    blue = Math.ceil(Math.random()*255);
    green = Math.ceil(Math.random()*255);
     
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;


     
}



