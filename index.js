let frontFace = document.querySelector("front-face");
let backFace = document.querySelector("back-face");
let cardsContainer = document.querySelector(".cards-container")
let qdteCartas;
let verificaInicio = false;
let contaJogada = 0;

let contadorJogadaUsuário = 0;

let p0 = "assets/bobrossparrot.gif";
let p1 = "assets/explodyparrot.gif";
let p2 = "assets/fiestaparrot.gif";
let p3 = "assets/metalparrot.gif";
let p4 = "assets/papagaio.gif";
let p5 = "assets/revertitparrot.gif";
let p6 = "assets/tripletsparrot.gif";

let versoCarta = "assets/back.png";

let cards = [p0, p1, p2, p3, p4, p5, p6];
let cardsGame = [];

function montaArray(qdteCartas){
    let qtdeArray = qdteCartas / 2;
    let i = 0;
    
    while(qtdeArray > i){
        cardsGame.push(cards[i]);
        cardsGame.push(cards[i]);
        i++;
    }

    cardsGame.sort(comparador); 
}

function comparador() { 
	return Math.random() - 0.5; 
}

function montaTabuleiro(qdteCartas){
    let c = 0;
    while(qdteCartas > c) {
        cardsContainer.innerHTML += `<div class="card" onclick="viraCarta(this)"  >
                <div class="front-face face">
                     <img src=${versoCarta} alt="">
                </div>
                <div class="back-face face">
                    <img src=${cardsGame[c]}  alt="">
                </div>
            </div>`;
            c++;
    }
}



function iniciaJogo(){
    while(verificaInicio == false){
        qdteCartas = Number(prompt("Com quantas cartas você quer jogar? Mínimo 4 e máximo de 14"))
        if(qdteCartas > 3 && qdteCartas <= 14 && qdteCartas % 2 ==0){
            verificaInicio = true;
            
        }
    }

    montaArray(qdteCartas);
    montaTabuleiro(qdteCartas);

}


iniciaJogo()


function verificaJogada(){
    let arrayCartas = document.querySelectorAll(".click");
    let arrayCartasTratado = Array.from(arrayCartas);

    

    let containerCarta1 = arrayCartas[0];
    let containerCarta2 = arrayCartas[1];


    let carta1 = arrayCartasTratado[0].querySelector(".back-face img").getAttribute('src');
    let carta2 = arrayCartasTratado[1].querySelector(".back-face img").getAttribute('src');


    if(carta1 == carta2){
        
        contaJogada = 0;
        containerCarta1.classList.remove("click");
        containerCarta1.classList.add("clicado");
        containerCarta2.classList.remove("click");
        containerCarta2.classList.add("clicado");
    }
    if(carta1 != carta2){
        
        arrayCartas[0].classList.remove("click");
        arrayCartas[1].classList.remove("click");
        teste = [];
        console.log(teste);
        contaJogada = 0;
    }
    
    console.log(`qtdeCartas: ${qdteCartas}`)

    let cartasCompletas = document.querySelectorAll(".clicado");
    console.log(`cartasCompletas.length : ${cartasCompletas.length}`)
    if (cartasCompletas.length == qdteCartas){
        finalDeJogo(contadorJogadaUsuário)
    }
        
}

function finalDeJogo(contadorJogadaUsuário){
    alert(`Fim de jogo! Você ganhou com ${contadorJogadaUsuário} jogadas`)
    window.location.reload();
}


function viraCarta(carta) {

    if(carta.classList.contains("click") == false){
         carta.classList.add("click")
        
        contaJogada++;
        contadorJogadaUsuário++;
        if (contaJogada == 2){
            setTimeout(verificaJogada, 1000);     
            
        }
    }
   
    
    /*    
    if(carta.classList.contains("click")){
        carta.classList.remove("click");
        contaJogada--;
        contadorJogadaUsuário++;
        if (contaJogada == 2){
            setTimeout(verificaJogada, 1000);     
        }
        
    } else {
        carta.classList.add("click")
        contaJogada++;
        contadorJogadaUsuário++;
        if (contaJogada == 2){
            setTimeout(verificaJogada, 1000);        
        }
    }
    
*/
   
}