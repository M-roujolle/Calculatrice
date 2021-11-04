// cible la case dans laquel on va ecrire les premiers nombre
let display = document.getElementById("valeur1");

//on déclare une variable qui va  nous permettre de savoir si l'on a cliqué sur le point
let point = false;
let resultat = document.getElementById("valeur3");

function displayNumber(number) {
  display.value += number; // mettre value car il est dans un imput
}

function displayOperator(operator) {
  document.getElementById("operateur").value = operator;
  if (display.value.length >= 1) {
    // on controle la zone numberOne pour voir si elle n'est pas vide à l'aide de .length
    display = document.getElementById("valeur2"); // on passe sur la zone valeur 2
    point = false; // lorsque nous cliquons sur operateur on reactive le point à l'aide de la variable point
  }
}

function reset() {
  document.getElementById("valeur1").value = "";
  document.getElementById("operateur").value = "";
  document.getElementById("valeur2").value = "";
  document.getElementById("valeur3").value = "";
  display = document.getElementById("valeur1"); // recharge la zone par defaut sur valeur1
  point = false;
}

function displayPoint() {
  // si point different de faux, on a joute un point
  if (!point) {
    display.value += ".";
  }
  // on passe point en vrai  pour le desactiver
  point = true;
}

function displayResult() {
  let val1 = document.getElementById("valeur1");
  let val2 = document.getElementById("valeur2");
  if (val1.value != "" && operateur.value != "" && val2.value != "") {
    switch (operateur.value) {
      case "X":
        resultat.value = Number(val1.value) * Number(val2.value);
        break;

      case "+":
        resultat.value = Number(val1.value) + Number(val2.value);
        break;
      case "-":
        resultat.value = Number(val1.value) - Number(val2.value);
        break;

      case "/":
        resultat.value = Number(val1.value) / Number(val2.value);
        break;
    }
  }
}
