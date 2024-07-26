let frontFace = document.querySelector("front-face");
let backFace = document.querySelector("back-face");
let qdteCartas;
let verificaInicio = false;

let p1 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\bobrossparrot.gif";
let p2 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\explodyparrot.gif";
let p3 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\explodyparrot.gif";
let p4 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\fiestaparrot.gif";
let p5 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\metalparrot.gif";
let p6 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\tripletsparrot.gif";
let p7 = "C:\Users\Pichau\Desktop\dev\driven\projeto-03-parrot-card\assets\papagaio.gif";

/*
function iniciaJogo(){
    while(verificaInicio == false){
        qdteCartas = Number(prompt("Com quantas cartas você quer jogar? "))
        if(qdteCartas > 3 && qdteCartas <= 14 && qdteCartas % 2 ==0){
            verificaInicio = true;
        }
    }
}
iniciaJogo()
*/




function viraCarta(carta) {
    carta.classList.toggle("click")
}