var objetTaches = [
    {value : "Nettoyer la cuisine", 
    status: "To do"},
    {value : "Faire le ménage", 
    status: "Done"},
    {value : "jouer", 
    status: "Doing"}
]
var list_taches = document.getElementById('list-taches')
var index = 0

//afficher le tableau des taches
function affichertableau(objet) {
    clearcontent('list-taches')
    objet.forEach(function(item) {
        index = objet.indexOf(item)
        list_taches.innerHTML = list_taches.innerHTML + `
        <div class="task-element">
            <button onClick="formModify('${item.value}', ${index})"> Modifier </button>
            <div id="${item.value}"> ${item.value} ${item.status}</div> 
            <button onClick="onClickDelete('${index}')">X</button>
        </div>
        `
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

//clear un div
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = ""
}

//modifier
function formModify(tache_a_modifier, index) { //faire apparaître le champs de texte
    document.getElementById(tache_a_modifier).innerHTML = `<input type="text" id="tacheModifier" value="${tache_a_modifier}" name=""> <input type="submit" value="valider" onclick="onModify(${index})" />` 
}
function onModify(index) { //modifier la valeur
    var tache_mod = document.getElementById('tacheModifier').value
    objetTaches[index].value = tache_mod
    affichertableau(objetTaches)
}

//filtrer
function filterTache(status) {
    var filterTaches = objetTaches.filter(function(objetTache){
        return objetTache.status === status
    })
    affichertableau(filterTaches)
}

//bouton all pour re afficher
function filterAll() {
    affichertableau(objetTaches)
}


function addTaskRandom() {
    var min = 1;
    var max = 3;
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(random);
    list_taches.innerHTML = list_taches.innerHTML + `
        <div class="task-element">
            <button onClick="formModify('${random}', ${index})"> Modifier </button>
            <div id="${random}"> ${random} ${item.status}</div> 
            <button onClick="onClickDelete('${index}')">X</button>
        </div>
        `
    
    // ajouterTache(random)
}
