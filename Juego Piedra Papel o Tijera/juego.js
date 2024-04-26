// Opciones
let opt_piedra = document.getElementById("piedra");
let opt_papel = document.getElementById("papel");
let opt_tijera = document.getElementById("tijera");
// Iniciar Juego
let start = document.getElementById("start_game");
// Jugadores
let img_opt_player1 = document.getElementById("player1");
let img_opt_player2 = document.getElementById("player2");
//Recuento
let ptos_player1 = document.getElementById("player1").innerText;
let ptos_player2 = document.getElementById("player2").innerText;
// Play
let select_player1;
let select_player2;
let vs;

start.onclick = function(){            
    select_player2 = opt_random(val_opt_random.toString());
    display_option_player2(select_player2);
    game_vs(select_player1,select_player2);

    console.log(select_player1,select_player2.toString());
}

// Player 1

opt_piedra.onclick = function () {
    select_player1 = "piedra";
    img_opt_player1.src = "./img/piedra_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}

opt_papel.onclick = function () {
    select_player1 = "papel";
    img_opt_player1.src = "./img/papel_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}

opt_tijera.onclick = function () {
    select_player1 = "tijera";
    img_opt_player1.src = "./img/tijera_izquierda.svg";
    img_opt_player2.src = "./img/cpu.svg";
}

//Player 2 CPU

let val_opt_random = ["piedra","papel","tijera"];
function opt_random() {
    return [...val_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);
}

function game_vs(select_player1,select_player2){ 

    if (select_player1 == "piedra") {
        if (select_player2 == "piedra") {
            vs = "same";
        } else if (select_player2 == "papel") {
            vs = "p2win";
         }else {
            vs = "p1win";
        } 
    } else if (select_player1 == "papel") {
        if (select_player2 == "papel") {
            vs = "same";
        } else if (select_player2 == "tijera") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_player1 == "tijera") {
        if (select_player2 == "tijera") {
            vs = "same";
        } else if (select_player2 == "piedra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    }

    if (vs == "p1win") {
        document.getElementById("result").innerText = "Player 1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;
        document.getElementById("ptos_player1").innerText = ptos_player1;
    } else if (vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "Player 2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }
}

function display_option_player2(select_player2){
    if (select_player2 == "piedra"){
        img_opt_player2.src = "./img/piedra_derecha.svg";
    } else if (select_player2 == "papel"){
        img_opt_player2.src = "./img/papel_derecha.svg";
    } else {
        img_opt_player2.src = "./img/tijera_derecha.svg";
    }
}

const reload = document.getElementById('reset');
reload.addEventListener('click', _ => {
    location.reload();
});