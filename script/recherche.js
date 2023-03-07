import { recipesJson } from "../data/recipes.js";
import { searchParams } from "./index.js";
import { afficheResults } from "./Affichage.js";

const recipes = JSON.parse(recipesJson);

export function updateResults(){
    const result = search(searchParams)
    afficheResults(result);
}

function search(searchParams) {
    // Vérifie quelles clés de searchParams sont vides.
    const activeSearch = {
        ingredients: searchParams.ingredients.length > 0,
        appliences: searchParams.appliences.length > 0,
        ustensils: searchParams.ustensils.length > 0,
        Text: searchParams.textSearch !== ''
    }
    // Si tous les paramètres sont vides, renvoyez un tableau de nombres compris entre 1 et 50.
    if (Object.values(activeSearch).every(item => item === false)) {
        return [...Array(50).keys()]
    }

    let idsFound = [];
    // Lier les fonctions de recherche à une clé d’objet
    Object.entries(activeSearch).forEach(([key, value]) => {
        const searchResults = {
            ingredients: () => ingredientsSearch(idsFound),
            appliences: () => appliencesSearch(idsFound),
            ustensils: () => ustensilsSearch(idsFound),
            text: () => keyWordSearch(idsFound)
        }
        if (value) {
            //  Pour chaque paramètre de recherche existant, appelle la fonction de recherche associée.
            const currentBatch = [];
            currentBatch.push(searchResults[`${key}`]())
            if (currentBatch.length === 0)
                return []
            else 
                idsFound = currentBatch.flat()
        }
    })
    return idsFound
}