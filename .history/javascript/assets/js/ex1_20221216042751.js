
var j = 0;
var a = 0;
var v = 0;
var c =0;
function exercice1() {
  while(true){
    personnes = window.prompt("Entrez votre age :\n Pour Quitter : q + entrer ");

    if (personnes == "") {
      break;
    }
    else if (personnes < 18) {
      j++;
    }
    else if ((personnes >= 18) & (personnes <= 65)) {
      a++;
    }
    else if (personnes > 65 & personnes < 100) {
      v++;
    }
    else if (personnes == 100) {
      alert(" nous avons trouvé notre centenaire .  \n fin de jeu merci et aurevoir ..");
      c++;
      break;
    }
    else if (personnes > 100) {
      alert(" vous etes hors concours!  fin du test !\n merci et aurevoir");
      break;
    }

    else if (personnes == "q" || personnes == "Q") {
      alert("bye-bye \n merci");
      break;
    }
    else {
      alert("Entrer un chiffre svp entre 1 et 100")
    }
  }
  window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + c + "" + " centenaire ");
  document.getElementById("ex1").innerHTML = "Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + c + "" + " centenaire ";
  //document.write("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
}
function myFunction() {
  location.reload();
}
function reset() {
  document.getElementById("myForm").reset();
}
