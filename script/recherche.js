import { recipesJson } from "../data/recipes.js";
import { searchParams } from "./index.js";

const recipes = JSON.parse(recipesJson);

export function updateResults(){
    const result = search(searchParams)
    displayResults(result);
}