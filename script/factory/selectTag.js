import { searchParams } from "../index.js";
import { updateResults } from "../recherche.js";

// FACTORY QUI CRAIE UNE ETIQUETTE SOUS LA BASE D'UN NAME ET D'UNE CATEGORY
export function addTag(name, category){
    const searchTagsDiv = document.getElementById('search-tags');
    const template = document.getElementById('template_tag').content;
    const templateClone = document.importNode(template, true);
    const tag = templateClone.querySelector('.tag');
    const tagTitle = templateClone.querySelector('.tag-title');
    const tagBtn = templateClone.querySelector('.tag-btn');

    tagTitle.textContent = name;
    tag.classList.add(`${category}-tag`);
    tag.setAttribute('data-category', category);
    tag.setAttribute('data-name', name);
    tagBtn.setAttribute('data-category', category);
    tagBtn.setAttribute('data-name', name);
    searchTagsDiv.appendChild(templateClone);
    tagBtn.addEventListener('click', removeTag);

}

// fonction qui supprimme une étiquette
function removeTag(elt){
    // suppression du tag (de l'étiquette) sélectionnée
    console.log('removeTag');
    console.log('elt', elt);
    const btn = elt.target
    const tag = elt.target.parentNode

    console.log('searchParams[btn.dataset.category]:', searchParams[btn.dataset.category]);
    searchParams[btn.dataset.category] = searchParams[btn.dataset.category].filter(keyword => keyword !== btn.dataset.name);
    tag.parentNode.removeChild(tag)
    elt.target.removeEventListener('click', removeTag)
    updateResults()
}