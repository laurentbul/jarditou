
function add() {
    var pu, qnt, pap, rem, port;
    pu = parseInt(document.getElementById("first").value);
    qnt = parseInt(document.getElementById("second").value);
    pap = pu * qnt;
    //rem = pap * prcnt;
    alert(pap);
    if (100 <= pap && pap <= 200) {
        rem = pap * 5 / 100;
        port = pap * 2 / 100;
        if (port <= 6) {
            port = 6;
        }
        pap = pap - rem + port;
    }
    if (pap < 100) {
        rem = 0;
        port = pap * 2 / 100
        if (port <= 6) {
            port = 6;
        }
        pap = pap - rem + port;
    }
    else if (200 < pap && pap <= 500) {
        rem = pap * 10 / 100;
        port = pap * 2 / 100
        if (port <= 6) {
            port = 6;
        }
        pap = pap - rem + port;
    }
    else if (pap > 500) {
        port = 0;
        rem = pap * 10 / 100;
        if (pap - rem < 500) { port = pap * 2 / 100 }
        pap = pap + port - rem;
        pap = pap.toFixed(2);
    }
    document.getElementById("answer").innerHTML = "prix à payer net : " + pap + " total remise : " + rem + " cout de transport : " + port;
    document.getElementById("answer1").innerHTML = "prix à payer net : " + pap + " total remise : " + rem + " cout de transport : " + port;
}

function myFunction() {
    location.reload();
}
function reset() {
    document.getElementById("myForm").reset();
}
