var objetTaches = [
    {value : "Nettoyer la cuisine", 
    status: "To do",
    priority: 1},
    {value : "Faire le ménage", 
    status: "Done",
    priority: 4},
    {value : "Jouer à la console", 
    status: "Doing",
    priority: 5}
]
var list_taches = document.getElementById('list-taches')
var prior = document.getElementsByClassName('priority')
var index = 0

//afficher le tableau des taches
function affichertableau(objet) {
    clearcontent('list-taches')
    objet.forEach(function(item) {
        index = objet.indexOf(item)
        list_taches.innerHTML = list_taches.innerHTML + `
            <div class="task-element">
                <button onClick="formModify('${item.value}', ${index}, ${item.priority})">Modifier</button>
                <div id="${item.value}"> ${item.value}</div> 
                <div class="status">${item.status}</div> 
                <div class="priority"></div> 
                <button onClick="onClickDelete('${index}')">Supprimer</button>
            </div>
        `
    })
}
console.log(objetTaches)
affichertableau(objetTaches)
afficherPriority(objetTaches)

//ajouter tache
function onTaskSubmit() {
    var tache = document.getElementById('tache').value
    var num = document.getElementById('priority').value
    objetTaches.push({value: tache, status: "To do", priority: num})
    affichertableau(objetTaches)
    afficherPriority(objetTaches)
}

//supprimer tache
function onClickDelete(index) {
    objetTaches.splice(index, 1)
    affichertableau(objetTaches)
    afficherPriority(objetTaches)
}

//clear un div
function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = ""
}

//modifier
function formModify(tache_a_modifier, index, num_prior) { //faire apparaître le champs de texte
    document.getElementById(tache_a_modifier).innerHTML = `
            <input type="text" id="tacheModifier" value="${tache_a_modifier}" name=""> 
            <input type="submit" value="valider" onclick="onModify(${index})" />
        ` 
    prior[index].innerHTML = `<input type="number" id="priorModifier" value="${num_prior}" min="0" max="5"> `
}
function onModify(index) { //modifier la valeur
    var tache_mod = document.getElementById('tacheModifier').value
    var prior_mod = document.getElementById('priorModifier').value
    objetTaches[index].value = tache_mod
    objetTaches[index].priority = prior_mod
    affichertableau(objetTaches)
    afficherPriority(objetTaches)
}

//filtrer
function filterTache(status) {
    var filterTaches = objetTaches.filter(function(objetTache){
        return objetTache.status === status
    })
    affichertableau(filterTaches)
    afficherPriority(filterTaches)
}

//bouton all pour re afficher
function filterAll() {
    affichertableau(objetTaches)
    afficherPriority(objetTaches)
}

//random
function addTaskRandom() {
    var min = 0
    var max = objetTaches.length

    var random = Math.floor(Math.random() * (max - min + 1) + min)
    // console.log(random);
    var tache_random = objetTaches[random].value;
    ajouterTache(tache_random)
}
function ajouterTache(tache) {
    var min = 0
    var max = 5
    var random = Math.floor(Math.random() * (max - min + 1) + min)

    objetTaches.push({value: tache, status: "To do", priority: random})
    affichertableau(objetTaches)
    afficherPriority(objetTaches)
}

//priority
function afficherPriority(objet) {
    objet.forEach(function(item) {
        for (var i = 1; i <= item.priority; i++) {
            prior[objet.indexOf(item)].innerHTML = prior[objet.indexOf(item)].innerHTML + `<a href="" class="starmoins"><i class="fas fa-star"></i></a>`
            // console.log(item.priority + item.value);
            // console.log(i + " i");

            if (i === item.priority) {
                for (var j = i; j < 5; j++) {
                    prior[objet.indexOf(item)].innerHTML = prior[objet.indexOf(item)].innerHTML + `<a href="" class="starplus"><i class="far fa-star"></i></a>`
                }
            }
        }
    });
}
//Trier priority
function Trier(tri) {
    if (tri === "max") {
        var arrayTri = objetTaches.sort(function (a, b) {
            return b.priority - a.priority
        })
    }
    if (tri === "min") {
        var arrayTri = objetTaches.sort(function (a, b) {
            return a.priority - b.priority
        })
    }
    affichertableau(arrayTri)
    afficherPriority(arrayTri)
}