function onlyUnique (value, index, self) {
    return self.indexOf(value) === index
}
export function getIngredients(recipes){
    const allIngredient = [];
    recipes.forEach(recipe => recipe.ingredients.forEach(object => {
        allIngredient.push(object.ingredient)
    }));
    const filteredIngredients = allIngredient.filter(onlyUnique);
    filteredIngredients.sort((a, b) => a.localeCompare(b));
    return filteredIngredients
}
export function getAppliances(recipes) {
    const allAppliances = [];
    recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const uniqueAppliences = allAppliances.filter(onlyUnique);
    return uniqueAppliences;
}
export function getUstensils(recipes){
    const allUstensils = [];
    recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => {
        allUstensils.push(ustensil);
    }));
    const ustensils = allUstensils.filter(onlyUnique);
    return ustensils;
}
