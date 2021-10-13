var objetTaches = [
    // {value : "Nettoyer la cuisine", 
    // status: "To do"},
    // {value : "Faire le ménage", 
    // status: "To do"}
]
var list_taches = document.getElementById('list-taches')
var index = 0

function affichertableau(objet) {
    clearcontent('list-taches')
    objet.forEach(function(item) {
        index = objet.indexOf(item)
        list_taches.innerHTML = list_taches.innerHTML + `<div> ${item.value} ${item.status}</div> 
        <button onClick="onClickDelete('${index}')">X</button>`
    })
}
console.log(objetTaches)
affichertableau(objetTaches)

//ajouter taches dans l'objetTaches
function ajouterTache(tache) {
    objetTaches.push({value: tache, status: "To do"})
    affichertableau(objetTaches)
}
//ajouter tache
function onTaskSubmit() {
    var tache = document.getElementById('tache').value
    ajouterTache(tache)
}
//supprimer tache
function onClickDelete(index) {
    objetTaches.splice(index, 1)
    affichertableau(objetTaches)
}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = ""
}
