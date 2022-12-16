var j = 0;
var a = 0;
var v = 0;
personnes = window.prompt("Entrez votre age :\n Pour Quitter : q + entrer ");

function exercice1() {
  while(personnes<=100) {
    

    if (personnes == "") {
      alert("vide\n merci");
    }
    else if (personnes < 18) {
      alert("jeune\n merci");
      j++;
    }
    else if ((personnes <= 18) && (personnes <= 65)) {
      alert("adulte\n merci");
      a++;
    }
    else if (personnes > 65 && personnes < 100) {
      alert("vieux\n merci");
      v++;
    }

    else if (personnes == 100) {
      alert("centenaire\n merci");
      c++;
    }

    else if (personnes == "q" || personnes == "Q") {
      alert("bye-bye \n merci");
      break;
    }
    else if (personnes > 100) {
      alert("au dessus de 100 \n merci");
      break;
    }
    else {
      alert("Entrer un chiffre svp entre 1 et 100")
    }
  }

  window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " +  c + "" + " centenaire ");
  document.getElementById("ex1").innerHTML = "Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " +  c + "" + " centenaire ";
  //document.write("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
}
function myFunction() {
  location.reload();
}
function reset() {
  document.getElementById("myForm").reset();
}