import { addTag } from "./factory/selectTag.js";
import { updateResults } from "./recherche.js";
import { searchParams } from "./index.js";

const controls = [document.getElementById('ingredients-controls'), document.getElementById('appliances-controls'), document.getElementById('ustensils-controls')];
const buttons = [document.getElementById('ingredients-btn'), document.getElementById('appliances-btn'), document.getElementById('ustensils-btn')];
const inputs = [document.getElementById('ingredients-input'), document.getElementById('appliances-input'), document.getElementById('ustensils-input')];
const searchbar = document.getElementById('searchbar');

// ECOUTEUR D'EVENEMENTS
export function addEventListeners() {
    buttons.forEach(btn => btn.addEventListener('click', expandList));
    inputs.forEach(input => input.addEventListener('click', expandList));
    inputs.forEach(input => input.addEventListener('keyup', handlerTagKeyup));
    inputs.forEach(input => input.addEventListener('focusout', () => {
        input.value = ''
    }));

    controls.forEach(control => control.addEventListener('focusout', (evt) => {
        const combobox = evt.target.parentNode.parentNode // RECUPERATION DE L'ELEMENT DU DOM SUR LEQUEL ON A EFFECTUE UN CLICK
       // console.log('combobox', combobox);
        const category = evt.target.dataset.type

        const comboboxDOM = {
            combobox: document.getElementById(`${category}-combobox`),
            controls: document.getElementById(`${category}-controls`),
            button: document.getElementById(`${category}-btn`),
            input: document.getElementById(`${category}-input`),
            list: document.getElementById(`${category}-list`)

        }
       // console.log('comboboxDOM', comboboxDOM);

        if(!combobox.contains(evt.relatedTarget)) {
            hideList(comboboxDOM, category);
        }
    }))
   // console.log('searchbar', searchbar);
    searchbar.addEventListener('keyup', handlerKeyup);
}

function expandList(evt){
    const target = evt.target;
    const category = target.dataset.type;
   // console.log('category', category);
    
    const comboboxDOM = {
        combobox: document.getElementById(`${category}-combobox`),
        controls: document.getElementById(`${category}-controls`),
        button: document.getElementById(`${category}-btn`),
        input: document.getElementById(`${category}-input`),
        list: document.getElementById(`${category}-list`)

    }
   // console.log('comboboxDOM', comboboxDOM);
  
    const categoryEquivalences = {
        ingredients: 'ingrédient',
        appliances: 'appareil',
        ustensils: 'ustensile' 
    }
    comboboxDOM.input.setAttribute('placeholder', `rechercher un ${categoryEquivalences[category]}`);
    comboboxDOM.input.setAttribute('size', 35);
    comboboxDOM.input.classList.add('expanded');

   // console.log('comboboxDOM.list.children', comboboxDOM.list.children);
   // console.log('evt.target     comboboxDOM.button', evt.target, comboboxDOM.button);
   // console.log('comboboxDOM.list.classList', comboboxDOM.list.classList);
    
    const listArray = [].slice.call(comboboxDOM.list.children);
    if(evt.target === comboboxDOM.button || evt.target === comboboxDOM.input ) {
        comboboxDOM.list.classList.remove('hidden')
    }
    listArray.forEach(elt => elt.addEventListener('click', selectTag))
}

function hideList(comboboxDOM, category){
    const listArray = [].slice.call(comboboxDOM.list.children);
    listArray.forEach(elt => elt.removeEventListener('click', selectTag))

    const categoryEquivalences = {
        ingredients: 'Ingrédients',
        appliances: 'Appareils',
        ustensils: 'Ustensiles'
    }
    comboboxDOM.list.classList.add('hidden')
    comboboxDOM.input.setAttribute('placeholder', `${categoryEquivalences[category]}`)
    comboboxDOM.input.setAttribute('size', 20)
    comboboxDOM.input.classList.remove('expanded')
}

function handlerKeyup(){
    // empêcher d'autres touches que [AZ-az, espace] de déclencher la recherche
    if (searchbar.value.length < 3 && searchParams.textSearch.length > 0) {
        searchParams.textSearch = ''
        updateResults()
    }

    if(searchbar.value.length >= 3) {
        searchParams.textSearch = searchbar.value
        console.log('searchParams.textSearch : ', searchParams.textSearch);
        updateResults()
    }
}

function handlerTagKeyup (evt) {
    const currentInput = evt.target;
    const category = currentInput.dataset.type;

    console.log('currentInput', currentInput);
    const currentTags = [].slice.call(document.querySelectorAll(`li[data-category=${category}]`));
    // console.log('currentTags', currentTags);
    if (currentInput.value.length >= 3) {
        // console.log('currentInput.value.length', currentInput.value.length);
        currentTags.forEach(tag => tag.classList.remove('hidden'));
       //  console.log('currentTags après forEach', currentTags);
        const tagsToHide = currentTags.filter(li => !li.dataset.name.toLowerCase().includes(currentInput.value.toLowerCase()));
       // console.log('tagsToHide = currentTags après filtre', tagsToHide);
        tagsToHide.forEach(tag => tag.classList.add('hidden'));
       // console.log('tagsToHide apres forEach', tagsToHide);
    }
    if (currentInput.value.length < 3) {
        currentTags.forEach(tag => tag.classList.remove('hidden'));
    }
}

function selectTag (e) {
    const category = e.target.dataset.category
    const comboboxDOM = {
        combobox: document.getElementById(`${category}-combobox`),
        controls: document.getElementById(`${category}-controls`),
        button: document.getElementById(`${category}-btn`),
        input: document.getElementById(`${category}-input`),
        list: document.getElementById(`${category}-list`)
    }

    const name = e.target.dataset.name
    searchParams[category].push(name)
    addTag(name, category)
    hideList(comboboxDOM, category)
    updateResults()

}