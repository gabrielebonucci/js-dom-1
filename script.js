//Seleziono gli elementi dal DOM usando il loro id

const lamp = document.getElementById('lampadina');
const button = document.getElementById('bottoneLuce');

// Aggiungo l'ascoltatore di eventi per il click

button.addEventListener('click', function() {
    //controllo se l'url dell'immagine attuale contiene la parola "spenta"

    if (lamp.src.includes("spenta")) {

        // Se è SPENTA: la accendo
        // Cambio l'immagine con quella della lampadina accesa

        lamp.src = "img/lampadina_accesa.png";

        // Cambio il testo del bottone

        button.innerText = "Spegni";
        button.style.backgroundColor = 'black';
        button.style.color = 'white';


    } else {

        // Altrimenti se è gia accesa: la spengo
        // Ripristino l'immagine della lampadina spenta

        lamp.src = "img/lampadina_spenta.png";

        // Ripristino il testo del botton in "Accendi"

        button.innerText = "Accendi";
        button.style.backgroundColor = 'yellow';
        button.style.color = 'black';

       
    }
});

