import { recipes } from '../data/recipes.js';
import { searchParams } from './index.js';
import { getIngredients, getAppliances, getUstensils } from './factory/tagListFactories.js';
import { recipeFactory } from './factory/recipeFactory.js';


export function afficheResults (recipeIds) {
    const resultSection = document.getElementById('content-page');
    const noResult = document.getElementById('no-result');
    resultSection.innerHTML = '';
    noResult.classList.add('hidden');
    // Résultat brut
    const rawResult = [];

    if (recipeIds.length > 0) {
        recipeIds.forEach(id => {
            rawResult.push(recipes.filter(recipe => recipe.id === id))
        });
        // la fonction flat() doit transformer le tableau de tableau rawResult 
        // qui contient le résultat brut en un seul tableau: flatResult
        const flatResult = rawResult.flat();
        const allTags = [
            {
                category: 'ingredients',
                tags: getIngredients(flatResult)
            },
            {
                category: 'appliances',
                tags: getAppliances(flatResult)
            },
            {
                category: 'ustensils',
                tags: getUstensils(flatResult)
            }
        ]
        flatResult.forEach(recipe => recipeFactory(recipe));
        allTags.forEach(tagObject => {
            displayTag(tagObject);
        })
    } else {
        document.getElementById('no-result').classList.remove('hidden')
    }
}

function displayTag (tagObject) {
    const tagList = document.getElementById(`${tagObject.category}-list`);
    tagList.innerHTML = ''
    tagObject.tags.forEach(tag => {
        if(!searchParams[tagObject.category].includes[tag]){
            const li = document.createElement('li');
            li.textContent = tag;
            li.classList.add(`${tagObject.category}-item`);
            li.setAttribute('data-category', tagObject.category);
            li.setAttribute('data-name', tag);
            li.setAttribute('tabindex', '-1');
            tagList.appendChild(li);
        }
    })
}