// Array numeri minati
const bombs = [];
let points = 0;


// Definisco contenitori in variabili
const start_alert = document.getElementById('start-alert');
const container_game = document.getElementById('main-cont');
const play = document.getElementById('play');
let cellCont = document.createElement("div");
cellCont.classList.add('d-flex', 'inner-cont', 'bounce');

for (let i = 1; i <= 81; i++) {
    cellCont.innerHTML += `<div class="cell">${i}</div>`;
    container_game.append(cellCont)
}


play.addEventListener('click', 
    function () {
        play.classList.remove('vib');
        start_alert.classList.add('roll');
        setTimeout(exitEnter, 1000);
    }
);


function exitEnter () {
    start_alert.classList.add('d-none');
    container_game.classList.remove('d-none');
    return;
}

