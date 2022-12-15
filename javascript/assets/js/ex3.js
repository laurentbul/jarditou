
function tableau() {
    var deletelement = prompt("entrer quel valeur vous voulez supprimer : \n Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel");
    const prenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel"];
    let fLen = prenoms.length;
    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + "[" + i + "]" + prenoms[i] + "</li>";
        if (prenoms[i] == deletelement) {
            alert(" i am : " + prenoms[i] + " ma place dans le tableau : " + i);
            prenoms.splice(i, 1);
            document.getElementById("demo1").innerHTML = "la suppression c'est bien passé";
        }
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = "nouveau tableau aprés suppression : prenoms [" + prenoms + " ] ";
}
function myFunction() {
    location.reload();
}
function reset() {
    document.getElementById("myForm").reset();
}
