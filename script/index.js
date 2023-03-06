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

}