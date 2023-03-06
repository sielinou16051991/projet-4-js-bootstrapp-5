import { addEventListeners } from "./event.js";
import { afficheResults } from "./Affichage.js";

export const searchParams = {
    textSearch: '',
    ingredients: [],
    appliances: [],
    ustensils: []
}

function initTable() {
    console.log('initTable');
    afficheResults([...Array(50).keys()]);
    addEventListeners();
}

initTable()

function myKeyUpFilter() {
    let elt = document.getElementById('search-filter').value;
    console.log('elt', elt);

    valFilter = document.getElementById('elt-filter');
    console.log('filtrage');
    console.log('val', elt);

    let template = `
             <div class="row mt-1 " id="elt-on-off">
                 <div class="col-6">
                     <button class="btn-primary">
                      ${elt} <i class="fa fa-times-circle" id="close" aria-hidden="true"></i>
                     </button>
                 </div>
             </div>
    `
    valFilter.innerHTML = template;
    closeElement();

}

function closeElement() {
    let off = document.getElementById('close');
    console.log('off', off);
    off.addEventListener('click', () => {
        let elt = document.getElementById('elt-on-off');
        elt.style.display = 'none';
    })
}
