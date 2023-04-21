document.getElementById('cambio').addEventListener('click', enviar)

var caja = document.querySelector('.vestuario');
function enviar() {
    var orden = document.forms['change']['orden'].value;
    if (orden == 'mover') {
        caja.style.animation = 'mover 5s ease-in-out infinite';
    } if (orden == 'saltar') {
        caja.style.animation = 'saltar 1s ease-in-out infinite';
    } if (orden == 'rotar') {
        caja.style.animation = 'rotar 10s ease-in-out infinite';
    } if (orden == 'espacio') {
        caja.style.animation = 'espacio 2s ease-in-out infinite';
    } if (orden == 'desaparecer') {
        caja.style.animation = 'desaparecer 6s ease-in-out infinite';
    } if (orden == 'resetear') {
        caja.style.animation = 'resetear';

    } if (orden == 'crecer') {
        caja.style.animation = 'crecer 4s linear infinite alternate';
    } if (orden == 'parar') {
        caja.style.animationPlayState = 'paused';
    } if (orden == '') {
        alert('Poner una orden')
    }

    function color() {

        var color = document.forms["Cambiar"]["cuadrito"].value;
        var caja = document.querySelector(".caja");

        caja.style.backgroundColor = `${ColorC}`;

    }




    function sombreros() {
        var gorros = document.forms['change']['sombrero'].value;

        if (gorros == 1) {
            document.getElementById('sombreros').setAttribute('src', 'assets/img/gorros/corona.png')
        } else if (gorros == 2) {
            document.getElementById('sombreros').setAttribute('src', '../simon dice/assets/img/gorros/Bombero.png')
        } else if (gorros == 3) {
            document.getElementById('sombreros').setAttribute('src', '../simon dice/assets/img/gorros/astronauta.png')
        } else if (gorros == 4) {
            document.getElementById('sombreros').setAttribute('src', '../simon dice/assets/img/gorros/ingeniero.png')
        }

    }

    function ropaas() {
        var ropas = document.forms['change']['ropa'].value;

        if (ropas == 1) {
            document.getElementById('ropaas').setAttribute('src', 'assets/img/ropa/vestido.png')
        } else if (ropas == 2) {
            document.getElementById('ropaas').setAttribute('src', 'assets/img/ropa/bombero2.png')
        } else if (ropas == 3) {
            document.getElementById('ropaas').setAttribute('src', 'assets/img/ropa/ingeniero2.png')
        } else if (ropas == 4) {
            document.getElementById('ropaas').setAttribute('src', 'assets/img/ropa/astronauta2.png')
        }



    }
}


