import { recipesJson } from "../data/recipes.js";
import { searchParams } from "./index.js";
import { afficheResults } from "./Affichage.js";

const recipes = JSON.parse(recipesJson);

export function updateResults(){
    const result = search(searchParams)
    afficheResults(result);
}

function search(searchParams) {
    //* Vérifie quelles clés de searchParams sont vides.
    const activeSearch = {
        ingredients: searchParams.ingredients.length > 0,
        appliences: searchParams.appliances.length > 0,
        ustensils: searchParams.ustensils.length > 0,
        Text: searchParams.textSearch !== ''
    }
    // récupération des valeurs de l'objet JSON
    let valArray = Object.values(activeSearch);
    //* Si tous les paramètres sont vides, renvoyez un tableau de nombres compris entre 1 et 50.
    if (valArray.every(item => item === false)) {
        return [...Array(50).keys()]
    }

    let idsFound = [];
    //* Lier les fonctions de recherche à une clé d’objet
    Object.entries(activeSearch).forEach(([key, value]) => {
        const searchResults = {
            ingredients: () => ingredientsSearch(idsFound),
            appliences: () => appliancesSearch(idsFound),
            ustensils: () => ustensilsSearch(idsFound),
            text: () => keyWordSearch(idsFound)
        }
        if (value) {
            //*  Pour chaque paramètre de recherche existant, appelle la fonction de recherche associée.
            const currentBatch = [];
            currentBatch.push(searchResults[`${key}`])
            if (currentBatch.length === 0) return []
            // transformation du tableau de tableau currentBatch en un seul tableau idsFound
            else idsFound = currentBatch.flat()
        }
    })
    return idsFound
}

// Mettre dans result les éléments de recipes qui ont le meme id que les ids qui sont dans le tableau ids
// puis transformer le tableau (la matrice) result en un seul tableau
function getRecipesById (ids) {
    const result = []
    ids.forEach(id => result.push(recipes.filter(recipe => recipe.id === id)))
    return result.flat()
}

// fonction de recherche d'un ustensils
function ustensilsSearch(ids = []){
    let singleTagMatchR = [];
    const singleTagMatchIds = [];
    const tags = searchParams.ustensils;
    let recipesTopParse;

    // S’il s’agit de la première fonction de recherche appelée, itére sur l’ensemble de l’objet recipes au lieu de l’argument idsFound.
    if (ids.length === 0) recipesTopParse = recipes
    else recipesTopParse = getRecipesById(ids)

    tags.forEach(tag => {
        singleTagMatchR = singleTagMatchR.concat(recipesTopParse.filter(recipe => recipe.ustensils.includes(tag)))
    })
    singleTagMatchR.forEach(recipe => singleTagMatchIds.push(recipe.id));
    return filterByOccurence(singleTagMatchIds, tags.length);
}

// fonction de recherche d'un Appareil
function appliancesSearch(ids = []){
    let singleTagMatchR = [];
    const singleTagMatchIds = [];
    const tags = searchParams.appliances;
    let recipesTopParse;
    
    // S’il s’agit de la première fonction de recherche appelée, itére sur l’ensemble de l’objet recipes au lieu de l’argument idsFound.
    if (ids.length === 0) recipesTopParse = recipes
    else recipesTopParse = getRecipesById(ids)

    tags.forEach(tag => {
        singleTagMatchR = singleTagMatchR.concat(recipesTopParse.filter(recipe => recipe.appliances === tag))
    })
    singleTagMatchR.forEach(recipe => singleTagMatchIds.push(recipe.id));
    return filterByOccurence(singleTagMatchIds, tags.length);
}

// fonction de recherche d'un ingredient
function ingredientsSearch(ids = []){
    let singleTagMatchR = [];
    const singleTagMatchIds = [];
    const tags = searchParams.ingredients;
    let recipesTopParse;
    
    // S’il s’agit de la première fonction de recherche appelée, itére sur l’ensemble de l’objet recipes au lieu de l’argument idsFound.
    if (ids.length === 0) recipesTopParse = recipes
    else recipesTopParse = getRecipesById(ids)

    tags.forEach(tag => {
        singleTagMatchR = singleTagMatchR.concat(recipesTopParse.filter(recipe => hasIngredient(recipe, tag)))
    })
    singleTagMatchR.forEach(recipe => singleTagMatchIds.push(recipe.id));
    return filterByOccurence(singleTagMatchIds, tags.length);
}

function hasIngredient (recipe, tag) {
    if (recipe.ingredients.find(Object => Object.ingredient.includes(tag))) return true
    else return false
}

function keyWordSearch (ids) {
    let matchR = []
    const matchIds = []
    const keyword = searchParams.textSearch
    let recipesTopParse

    if (ids.length === 0) recipesTopParse = recipes
    else recipesTopParse = getRecipesById(ids)

    matchR = matchR.concat(recipesTopParse.filter(recipe => recipe.name.includes(keyword)))
    matchR = matchR.concat(recipesTopParse.filter(recipe => recipe.description.includes(keyword)))
    matchR = matchR.concat(recipesTopParse.filter(recipe => hasIngredient(recipe, [keyword])))

    matchR.forEach(recipe => matchIds.push(recipe.id))

    return matchIds.filter((value, index, filteredRecipes) => filteredRecipes.indexOf(value) === index)
}

function filterByOccurence (array, idOccurence) {
    const idCount = {}
    const result = []

    array.forEach(id => {
        if (idCount[id] === undefined) idCount[id] = 1
        else idCount[id] += 1
    })

    Object.entries(idCount).forEach(([id, count]) => {
        if (count === idOccurence) result.push(parseInt(id))
    })

    return result
}