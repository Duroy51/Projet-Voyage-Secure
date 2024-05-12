document.addEventListener('DOMContentLoaded', function() {
    var listeDeroulante = document.getElementsById("Langue");
  
    listeDeroulante.addEventListener("change", function() {
      var fichierSelectionne = Langue.value;
      window.location.href = fichierSelectionne; // Redirige vers le fichier HTML sélectionné
    });
  });


let baliseNom = document.getElementById("Langue")
let nom = baliseNom.value
console.log(nom); // affiche ce qui est contenu dans la balise name

function redirigerVersPage() {
  var liste = document.getElementById('Langue');
  var page = liste.options[liste.selectedIndex].value;
  if(page != "") {
      window.location = page;
  }
}