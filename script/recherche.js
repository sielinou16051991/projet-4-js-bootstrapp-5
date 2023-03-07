import { recipesJson } from "../data/recipes.js";
import { searchParams } from "./index.js";
import { afficheResults } from "./Affichage.js";

const recipes = JSON.parse(recipesJson);

export function updateResults(){
    const result = search(searchParams)
    afficheResults(result);
}

function search(searchParams) {
    
}