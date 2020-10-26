var nombre = 1;
var texte = '';
var caracteres = "--";

// Gestion des lignes
for(var i = 1; i <= 5; i++) {

    // Compilation des nombres à afficher sur la ligne
    for(var j = 1; j <= 4; j++) {
        texte += nombre + ' ';
        nombre++;
    }

    // Affichage de la ligne
    console.log(caracteres + ' ' + texte + caracteres);

    // Calcul du nombre de départ de la prochaine ligne
    nombre = (nombre -1 ) * 2;

    // Réinitialisation du texte à afficher sur la prochaine ligne
    texte = '';
    caracteres += "--"
}