// Exercice : Jeu du nombre secret
// Objectif
// Le joueur doit deviner un nombre aléatoire entre 1 et 10. À chaque essai, le programme donnera un indice (trop haut, trop bas, ou correct). Le jeu doit permettre de relancer une partie en appuyant sur une touche.

// Étapes
// Variables et constantes : Créez des constantes pour les messages d'indice (par exemple, "Trop haut", "Trop bas", "Correct") et une variable pour stocker le nombre d'essais restants.
// Conditions et boucles : Utilisez une boucle pour permettre à l'utilisateur de faire plusieurs essais jusqu'à ce qu'il devine le nombre ou que les essais soient épuisés.
// Méthode pour générer un nombre aléatoire.
// Méthode pour vérifier la réponse et retourner le bon message.
// Bonus : Affichez les essais restants après chaque tentative.

// Mega bonus : 3 essais

function playGame(){
    const TooHight = "Too much"
const TooLow = "Too low"
const Correct = "Correct"

let chances = 3

let answer 

const Secret = Math.floor(Math.random() * (10 - 1) + 1 )

while(chances > 0 ){
    answer = prompt("Donne chiffre ")
    if(isNaN(answer) || (answer>0)|| (answer<0))  {
        alert('Pas valable')
        continue;// вызвать цикл снова !!
    }


   
    if (answer < Secret){
        alert(TooLow);
    }
    else if (answer > Secret){
        alert(TooHight)
    }
    else{
        alert(Correct)
        break;//прервать цикл 
    }

    chances--
}
let playAgaine  = confirm("againe")

if(playAgaine){
    playGame()
} else {
    alert("merci pidr")
}
}

playGame()


