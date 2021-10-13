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

//afficher taches
// function affichertache(objet) {
//     list_taches = list_taches + `
//         <div class="task-element"> 
//             <button onClick="onModify(''${objet.value}'"> Modifier </button>
//             <div> ${objet.value} ${objet.status}</div>
//             <button onClick="onClickDelete('${objet.value}')">X</button>
//         </div>
//     `
                                 
//     document.getElementById('list-taches').innerHTML = list_taches
// }
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



// function onModify(tache_a_modifier){
//     var input=document.getElementById('tache');
//     var leFormulaire=`<div id="formulaireModifier">
//                           <form class="formModifier"  onsubmit="onTaskSubmit();">
//                               <input type="text" id="tacheModifier" value="${tache_a_modifier}" name=""><br>
//                               <input type="submit" value="submit" onclick="onModify()" />
//                               <button class="btn">Submit</button>
//                           </form>
//         </div>`
//     input.value;document.getElgetElementsByClassName('container').appendChild(leFormulaire);
//     alert('modifier');
// }
