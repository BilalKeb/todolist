var todo = false
var text= ""
var objetTaches = [
    {value : "Nettoyer la cuisine", 
    status: todo},
    {value : "Faire le ménage", 
    status: todo}
]

//afficher le tableau des taches
objetTaches.forEach(function(item) {
    var test = `<div> ${item.value} </div>`
    document.getElementById("list-taches").innerHTML = test + `<div> ${item.value} </div>`
})
function onClickDelete(objet) {
    
}
//afficher tache
function affichertache(objet) {
    // document.getElementById("list-taches").innerHTML = `<div> ${objet.value} </div>`
    // var balise = document.createElement("div")
    // var text = document.createTextNode(objet.value)
    // balise.appendChild(text)
    // var element = document.getElementById("list-taches")
    // element.appendChild(balise)
}

//ajouter taches
function ajouterTache(tache) {
    objetTaches.push({value: tache, status: todo})
    affichertache({value: tache, status: todo}) 
    console.log(objetTaches);
}
function onTaskSubmit() {
    var tache = document.getElementById('tache').value;
    ajouterTache(tache)
}