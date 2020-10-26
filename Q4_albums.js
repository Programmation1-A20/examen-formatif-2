var prompt = require('prompt-sync')();

var valeur = 1;
var nbMauvaisesValeursEntrees = 0;
var lectureTerminee = false;

while(lectureTerminee === false) {
    valeur = prompt('Veuillez saisir une valeur entre 1 et 5: ');

    switch(valeur) {
        case '1':
            console.log('Album Enfants');
            break;
        case '2':
            console.log('Album Rock');
            break;
        case '3':
            console.log('Album Détente');
            break;
        case '4':
            console.log('Album Populaire');
            break;
        case '5':
            console.log('Album Jazz');
            break;
        case '0':
            lectureTerminee = true;
            break;
        default :
            nbMauvaisesValeursEntrees++;
            console.log('Cette option n’est pas disponible');
    }
}

console.log('Programme terminé. Il y a eu ' + nbMauvaisesValeursEntrees + ' mauvaise(s) valeur(s) entrée(s)');