function onlyUnique (value, index, self) {
    console.log('onlyUnique');
    // console.log('index', index);
    console.log('self.indexOf(value):', self.indexOf(value));
    return self.indexOf(value) === index
}
// LES 3 FONCTIONS CI-DESSOUS SONT DESTINEES A RECUPERER LES 
// INGREDIENTS, APPLIANCES ET USTANSILS DE LA BD recipes
export function getIngredients(recipes){
    console.log('getIngredients');
    const allIngredient = [];
    recipes.forEach(recipe => recipe.ingredients.forEach(object => {
        allIngredient.push(object.ingredient)
    }));
    const filteredIngredients = allIngredient.filter(onlyUnique);
    filteredIngredients.sort((a, b) => a.localeCompare(b));
    return filteredIngredients
}
export function getAppliances(recipes) {
    console.log('getAppliances');
    const allAppliances = [];
    recipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const uniqueAppliences = allAppliances.filter(onlyUnique);
    return uniqueAppliences;
}
export function getUstensils(recipes){
    console.log('getUstensils');
    const allUstensils = [];
    recipes.forEach(recipe => recipe.ustensils.forEach(ustensil => {
        allUstensils.push(ustensil);
    }));
    const ustensils = allUstensils.filter(onlyUnique);
    return ustensils;
}
