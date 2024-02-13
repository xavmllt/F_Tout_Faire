document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupère la valeur sélectionnée dans la liste déroulante
    var selectedAdresse = document.getElementById("adresse").value;

    // Redirige vers une autre page en utilisant window.location.href
    // Remplacez "page-de-destination.html" par l'URL de la page de destination souhaitée
    window.location.href = "devis2.html?adresse=" + selectedAdresse;
});

