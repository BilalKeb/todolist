var todo = false
var text= ""
var objetTaches = [
    {value : "Nettoyer la cuisine", 
    status: todo},
    {value : "Faire le ménage", 
    status: todo}
]

//afficher taches
function affichertaches(objet) {
    var balise = document.createElement("li")
    var text = document.createTextNode(objet.value)
    balise.appendChild(text)
    var element = document.getElementById("ul-taches")
    element.appendChild(balise)
}

objetTaches.forEach(function(item) {
    affichertaches(item)
})

//ajouter taches
function ajouterTache(tache) {
    objetTaches.push({value: tache, status: todo})
    affichertaches({value: tache, status: todo}) 
    console.log(objetTaches);
}
function onTaskSubmit() {
    var tache = document.getElementById('tache').value;
    ajouterTache(tache)
    alert('c bn')
}

