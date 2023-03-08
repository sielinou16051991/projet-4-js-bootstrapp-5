// CETTE FONCTION EST CHARGEE DE RECUPERER DE 
// CONSTRUIRE CHAQUE ARTICLE 

function recipeFactory(recipeContent) {
    // CREATION D'UN MODEL DE DONNEE DE LA BASE DE DONNE recipes
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipeContent

    // console.log('recipeContent', recipeContent);
    // CONSTRUCTION D'UN ARTICLE
    const resultSection = document.getElementById('content-page');
    const template = document.getElementById('template-recipe').content;
    const templateClone = document.importNode(template, true);
    // console.log('templateClone', templateClone);
    const recipe = templateClone.querySelector('.recipe');
    // console.log('recipe', recipe);
    const recipeTitle = templateClone.querySelector('.recipe-title');
    const recipeTime = templateClone.querySelector('.recipe-time');
    const recipeIngredients = templateClone.querySelector('.recipe-ingredients');
    const recipeDescription = templateClone.querySelector('.recipe-description');
   // console.log('recipe');
    recipe.setAttribute('id', `${id}`);
    recipe.setAttribute('data-appliance', `${appliance}`)
    recipe.setAttribute('data-ustensils', `${ustensils}`)
    recipe.setAttribute('data-servings', `${servings}`)
    recipe.setAttribute('tabIndex', '0')
    recipeTime.textContent = `${time} min`
    recipeTitle.textContent = name

    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        const b = document.createElement('b');
        b.textContent = `${ingredient.ingredient}`;
        li.appendChild(b);

        if (ingredient.quantity !== null && ingredient.quantity !== undefined) {
            const span = document.createElement('span');
            span.textContent = `: ${ingredient.quantity}`;

            if(ingredient.unit !== null && ingredient.unit !== undefined) {
                const span = document.createElement('span');
                span.textContent = `: ${ingredient.unit}`;
            }
            li.appendChild(span)
        }
        recipeIngredients.appendChild(li)
    });
    recipeDescription.textContent = `${description}`
    resultSection .appendChild(templateClone);
}
export {recipeFactory}