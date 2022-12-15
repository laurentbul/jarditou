function validateForm() {
    let patternnumber = /^\d+$/
    var rgxDep =/^[0-9]{5}$/;
    var regxAdres=/^[A-Za-z0-9_]+$/;
    let pattern = /^[a-zA-Z\s]+$/;
    let patternisnumber = /^[1-9]\d+$/
    let patterndtn = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    vnom = document.getElementById("fname").value;
    vprenom = document.getElementById("fprenom").value;
    vardtn = document.getElementById("fdtn").value;
    var varville = document.getElementById("fville").value;
    var varadresse = document.getElementById("fadresse").value;
    var varcdpost = document.getElementById("fcodepostal").value;
    var varpays = document.getElementById("fpays").value;
    var varfavoris = document.getElementById("paysselect").value;
    var varsujet = document.getElementById("fsujet").value;
    var remember = document.getElementById('atif');
    // =============================================1=== ton nom =====================================
    if (vnom == "") {
        document.getElementById("commentaire1").innerHTML = "Entrez votre nom : est obligatoire";
        document.getElementById("fname").focus();
    }

    else if (vnom.length <= 1) {
        document.getElementById("commentaire1").innerHTML = "Entrez votre nom : ne peut pas inférieur à un caractere";
    }

    else if (pattern.test(vnom) === false) {
        document.getElementById("commentaire1").innerHTML = "Entrez votre nom: alphabet latine";
    }
    else {
        document.getElementById("commentaire1").innerHTML = "votre nom est :" + vnom;
        document.getElementById("commentaire1").style.color = "black";
    }

    // ============================================2==== ton prenom =====================================

    vprenom = document.getElementById("fprenom").value;
    if (vprenom == "") {
        document.getElementById("commentaire2").innerHTML = "Entrez votre prénom :  est obligatoire";
        document.getElementById("fprenom").focus();
    }
    else if (pattern.test(vprenom) === false) {
        document.getElementById("commentaire2").innerHTML = "Entrez votre nom: alphabet latine";
    }
    else {
        document.getElementById("commentaire2").innerHTML = "Bonjour :" + vprenom;
        document.getElementById("commentaire2").style.color = "black";
    }

    // // ===========================================3===== ta date de naissance =====================================


    if (vardtn == "") {
        document.getElementById("commentaire3").innerHTML = "Entrez votre date de naissance : est obligatoire";
    }
    else if (patterndtn.test(vardtn) === false) {
        document.getElementById("commentaire3").innerHTML = "date de naissance que vous avez entré non conforme: doit etre des  chiffres";
    }
    else {
        document.getElementById("commentaire3").innerHTML = "votre date de naissance valider :";
        document.getElementById("commentaire3").style.color = "black";
    }

    // // ============================================4==== ta ville =====================================

    if (varville == "") {
        document.getElementById("commentaire4").innerHTML = "Entrez votre ville : est obligatoire ";
    }
    else if (pattern.test(varville) === false) {
        document.getElementById("commentaire4").innerHTML = "text que vous avec entré non conforme:";
    }
    else {
        document.getElementById("commentaire4").innerHTML = "oui :" + varville;
        document.getElementById("commentaire4").style.color = "black";
    }

    // // =========================================5======= ton adresse=====================================


    if (varadresse == "") {

        document.getElementById("commentaire5").innerHTML = "Entrez votre adresse est obligatoire";
    }
    else if (regxAdres.test(varadresse) === false) {
        document.getElementById("commentaire5").innerHTML = "text que vous avez entré non conforme:";
    }

    else if (varadresse.length < 4) {
        document.getElementById("commentaire9").innerHTML = " Entrez votre adresse seulement chiffre et lettre accepté :est obligatoire ";
    }

    else {
        document.getElementById("commentaire5").innerHTML = "votre adresse  :" + varadresse;
        document.getElementById("commentaire5").style.color = "black";
    }

    // // =============================================6=== ton code postale=====================================

    if (varcdpost == "") {
        document.getElementById("commentaire6").innerHTML = "Entrez votre code postal est obligatoire";
    }

    else if (rgxDep.test(varcdpost) === false) {
        document.getElementById("commentaire6").innerHTML = "il faut 5 chiffre:";
    }
    else {
        document.getElementById("commentaire6").innerHTML = "votre codepostale :" + varcdpost;
        document.getElementById("commentaire6").style.color = "black";
    }
    // // ==============================================7== ton pays=====================================

    if (varpays == "") {
        document.getElementById("commentaire7").innerHTML = "Entrez votre pays est obligatoire";
    }
    else if (pattern.test(varpays) === false) {
        document.getElementById("commentaire7").innerHTML = "pays non conforme :";
    }
    else {
        document.getElementById("commentaire7").innerHTML = "conforme votre pays :" + varpays;
        document.getElementById("commentaire7").style.color = "black";
    }

    // // ===============================================8 favoris=====================================

    if (varfavoris == "") { document.getElementById("commentaire8").innerHTML = "vous n'avez pas choisis votre pays de reve" }
    else {
        document.getElementById("commentaire8").innerHTML = "selection est :" + varfavoris;
        document.getElementById("commentaire8").style.color = "black";
    }
    // // ===============================================8 sujet =====================================

    if (varsujet == "") { document.getElementById("commentaire9").innerHTML = "Entrez votre de sujet est obligatoire" }

    else if (pattern.test(varsujet) === false) {
        document.getElementById("commentaire9").innerHTML = "sujet non conforme:" + varsujet;
    }
    else if (varsujet.length < 50) {
        document.getElementById("commentaire9").innerHTML = "il faut rentrer au minimum 50 caracteres dans le champs ";
    }
    else {
        document.getElementById("commentaire9").innerHTML = "votre sujet " + varsujet
        document.getElementById("commentaire9").style.color = "black";
    }
// // =============================================== checkbox =====================================
    if (remember.checked){
        document.getElementById("commentaire10").innerHTML="vous avez accepté"
    }else{
        document.getElementById("commentaire10").innerHTML="vous n' avez pas accepté"
    }
}   