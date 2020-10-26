var prompt = require('prompt-sync')();
var totalNotes = 0;
var nbNotes = 0;
var nbNotes0a49 = 0;
var nbNotes50a59 = 0;
var nbNotes60a75 = 0;
var nbNotes75EtPlus = 0;

var note = 0;

while(note >= 0) {
    note = parseInt(prompt('Veuillez entrer une note: '));
    if(note > 0) {
        nbNotes++;
        totalNotes += note;
        if(note <= 49) {
            nbNotes0a49++;
        } else if(note < 59) {
            nbNotes50a59++;
        } else if(note < 75) {
            nbNotes60a75++;
        } else {
            nbNotes75EtPlus++;
        }
    }
}

console.log();
console.log('Nombre de notes entrées: ' + nbNotes);
console.log('Moyenne: ' + totalNotes / nbNotes);
console.log('Nombre de notes entre 0 et 49: ' + nbNotes0a49);
console.log('Nombre de notes entre 50 et 59: ' + nbNotes50a59);
console.log('Nombre de notes entre 60 et 75: ' + nbNotes60a75);
console.log('Nombre de notes de 75 et +: ' + nbNotes75EtPlus);
