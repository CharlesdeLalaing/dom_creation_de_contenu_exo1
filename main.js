// # 1. 
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1"

// - Récupère la div dont l'id est #content
let exo1 = document.querySelector('#content');

// - Ajoute un h2 dedans
let exo1h2 = document.createElement("h2");
exo1.insertBefore(exo1h2, exo1.firstChild);
// exo1.insertBefore(exo1h2, exo1.lastChild) --- les deux sont bons

// - Ajout le texte suivant au h2 "Part 6 - Exercice 1"
exo1h2.innerText = 'Part 6 - Exercice 1';


// # 2.
// - Créer un paragraphe avec du lorem ipsum
let exo2p = document.createElement('p');
exo2p.innerText = 'Ne comicus discurrunt post quod comicus post relicto ait progrediar quod quod civitatis familiarium signatis complures signatis voluptatum quidam post ampla dicitur civitatis terga subversasque et periculi post et transiturus enim transiturus ampla signatis et cuncta velut imitatae urbis voragines spatia et matronae voluptatum discurrunt per opertis voragines per dicitur.';

// - Ajoute le apres le h2
exo1.insertBefore(exo2p, exo1.lastChild);

// # 3.
// - Créer un h1 
let exo3h1 = document.createElement('h1');

// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
exo3h1.innerText = 'Le DOM - Création de HTML';

// - Place le en premier enfant de la div #content
exo1.insertBefore(exo3h1, exo1.firstChild);

// # 4.

// - Prend le contenu de la div #content
let exo4contenu = exo1.cloneNode(true);
let exo4secDiv = document.querySelector('#secondaire');

// - Copie le dans la div #secondaire
exo4secDiv.appendChild(exo4contenu);

// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
exo4contenu.firstChild.nextSibling.innerText = 'Part 6 - Exercice 2';


// # 5.


// - Créer une nouvelle div #matiere
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'matiere')

// - Créer une liste ordonnée des 3 dernières choses que tu as appris
let nouveau = ['planter', 'skater', 'skiff'];

let liste = document.createElement('OL');

for ( i = 0; i < nouveau.length; i++) {
    let li = document.createElement('li');
    
    li.innerHTML = nouveau[i];
    liste.appendChild(li);
}

newDiv.appendChild(liste);

console.log(newDiv);

let body = document.getElementsByTagName('body')[0];
console.log(body);
body.appendChild(newDiv)