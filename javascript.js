var body = document.getElementById('body')
var interruptor = document.getElementById("interruptor")
var lamp = document.getElementById("lamp")
var cons = document.getElementById("fixed")

function quebrada (){
    return lamp.src.indexOf ('quebrada') > -1
}

function on (){
    if (!quebrada()){
    lamp.src = './assets/ligada.png'
    body.style.background = "radial-gradient(circle, rgba(163,163,163,1) 70%, rgba(0,0,0,1) 100%, white 100%)"
    interruptor.style.background = "linear-gradient(90deg, rgba(240,11,11,1) 0%, rgba(169,214,153,1) 19%, rgba(24,246,0,1) 100%)"
    }
}

function off (){
    if (!quebrada()){
    lamp.src = './assets/desligada.png'
    body.style.background = "black"
    interruptor.style.background = "linear-gradient(90deg, rgba(24,246,0,1) 0%, rgba(213,153,153,1) 19%, rgba(240,11,11,1) 100%)"
    }
}

function broken (){
    lamp.src = './assets/quebrada.png'
    body.style.background = "black"
}

function fixed(){
    lamp.src = './assets/desligada.png'
    body.style.background = "black"
}

function OnOff(){
    if (interruptor.textContent == 'Turn On'){
        on()
        interruptor.textContent = 'Turn Off'
    }else{
        off()
        interruptor.textContent = 'Turn On'
    }
}

lamp.addEventListener("dblclick", broken)
lamp.addEventListener("mouseover", on)
lamp.addEventListener("mouseleave", off)
