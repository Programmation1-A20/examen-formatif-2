var i = 1;
var z = 5;
var nombre = 3;
var nom = 'Maison';
var affiche = '';

while (i < 5){
    nombre = nombre * 2;
    if (nombre > 24) {
        console.log('YA');
    }
    
    i=i+1;
}

affiche += ('I:'+ i + ' Nombre:= ' + nombre + '\n'); 

for (i = 50; i >= 40; i -= 2){
    if (z < 0) {
        console.log('toto');
    }

    affiche += ('I:' + i + ' ' + nom + ' Z=' + z + '\n');
    z -= 5;       
}

affiche += ('I:' + i);
console.log(affiche);

/********************** 
Réponse : 
YA
toto
toto
toto
toto
I:5 Nombre:= 48
I:50 Maison Z=5
I:48 Maison Z=0
I:46 Maison Z=-5
I:44 Maison Z=-10
I:42 Maison Z=-15
I:40 Maison Z=-20
I:38
**********************/ 
