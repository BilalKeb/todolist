var objetTaches = [
    {value : "Nettoyer la cuisine", 
    status: "To do"},
    {value : "Faire le ménage", 
    status: "To do"}
]
var list_taches = ""

function affichertableau(objet) {
    // clearcontent('list-taches')
    objet.forEach(function(item) {
        affichertache(item)
    })
}
affichertableau(objetTaches)

//afficher taches
function affichertache(objet) {
    list_taches = list_taches + `<div> ${objet.value} ${objet.status}</div> <button onClick="onClickDelete('${objet.value}')">X</button>`
    document.getElementById('list-taches').innerHTML = list_taches
}
//ajouter taches dans l'objetTaches
function ajouterTache(tache) {
    objetTaches.push({value: tache, status: "To do"})
    affichertache({value: tache, status: "To do"}) 
    console.log(objetTaches);
}
//ajouter tache
function onTaskSubmit() {
    var tache = document.getElementById('tache').value;
    ajouterTache(tache)
}
//supprimer tache
function onClickDelete(tache) {
    var newObjet = objetTaches.filter(function(newTache) {
        return newTache.value !== tache       
    })
    console.log(newObjet)
    affichertableau(newObjet)
}
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = ""
}
