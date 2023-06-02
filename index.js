// Multiplication par 5
document.getElementById("boutsomme").addEventListener("click", function() {
    var premierNombre = parseInt(document.getElementById("multiplication-premier-nombre").value);
    var resultat = premierNombre * 5;
    document.getElementById("resultats-multi").innerText = "Résultat : " + resultat;
});

// Division par 5
document.getElementById("bout-div").addEventListener("click", function() {
    var premierNombre = parseInt(document.getElementById("nbrediv-premier").value);
    var resultat = premierNombre / 5;
    document.getElementById("resultats-division").innerText = "Résultat : " + resultat;
});

