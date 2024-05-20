
const listTeclas = document.querySelectorAll('.tecla');
const listSounds = document.querySelectorAll('.sounds');

const counter = listTeclas.length;

function playAudio(i) {
    listSounds[i].play()
}

for(var i = 0; i <= counter; i++) {
    listTeclas[i].onclick = function () {
        playAudio(i)
    }
}