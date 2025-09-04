//Seleziono gli elementi dal DOM usando il loro id

const lamp = document.getElementById('lampadina');
const button = document.getElementById('bottoneLuce');

//Aggiungo una funzione, quando qualcuno clicca sull'elemento "button" esegue il comando

button.addEventListener('click', function() {
    lamp.src = "img/lampadina_accesa.png";
});

