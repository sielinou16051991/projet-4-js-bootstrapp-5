import { addEventListeners } from "./event.js";
import { displayResults } from "./Afficheage.js";

export const defaultSearchParams = {
    textSearch: '',
    ingredients: [],
    appliances: [],
    ustensils: []
}

function initTable() {
    console.log('initTable');
    displayResults([...Array(50).keys()]);
    addEventListeners();
}

initTable()