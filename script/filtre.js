let varRecipes = recipes;
let recipes_temp = recipes;
let globa = [];

// document.open();
// document.write("<p>Hello world!</p>");
// document.write("<p>I am a fish</p>");
// document.write("<p>The number is 42</p>");
// document.close();
label = document.getElementById('labelIngredients');
p = document.createElement('p')
p.className='mb-n-1'
temp = `Ingredients`
p.innerHTML = temp;
label.appendChild(p);
function motFiltre() {

    console.log('varRecipes', varRecipes);
    valFilter = document.getElementById('elt-filter');
    console.log('filtrage');
    // let val = myKeyUpFilter();
    // console.log('val', val);

    // let template = `
    //             <div class="row mt-1 " id="elt-on-off">
    //                 <div class="col-6">
    //                     <button class="btn-primary">
    //                      ${val} <i class="fa fa-times-circle" id="close" aria-hidden="true"></i>
    //                     </button>
    //                 </div>
    //             </div>
    //    `
    // valFilter.innerHTML = template;
    // this.closeElement();
}


deuxTiers = 2 * varRecipes.length / 3;
// CONSTRUCTION DES CARDS
this.initTable(varRecipes);
elt = varRecipes

function initTable(elt) {
    console.log('elt', elt);
    console.log('globa', globa);
    if (globa && (globa.length > 0)) {
        console.log('d.remove()');
        for (let t = 0; t < globa.length; t++) {
            let d = document.getElementById('colone');
            let c = document.getElementById(globa[t].id);
            c.style.display = "none";

        }
    }
    for (let i = 0; i < elt.length; i++) {

        // for (let p = 0; p < recipes[i].length; p++) {
        // }
        let coloneElement = document.getElementById('colone');
        let card = document.createElement('div');

        let templateCard = `
            <div class="card"> 
                <figure class="figure">        
                    <img src="..." class="figure-img img-fluid rounded" alt="...">
                </figure> 
                <div class="card-body">
                    <div class="row">
                        <div class="col-8">
                            <h5 class="card-title">${elt[i].name}</h5>
                        </div>
                        <div class="col-4">
                            <p><i class="fa fa-clock-o" aria-hidden="true"></i> ${elt[i].time} &nbsp; minutes</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6" id="${elt[i].id}">
    
                        </div>
                        <div class="col-6  text-hidden">
                            <p class="card-text">
                                ${elt[i].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `
        card.innerHTML = templateCard;
        coloneElement.appendChild(card);

        //------------------------------------------ APPAREILS -------------------------------------
        
            console.log('appliance', elt[i].appliance);
            appareils = document.getElementById('appareils');
            elt = document.createElement('p');
            elt.className = 'p-noWrap';

            if(elt[i] && elt[i].appliance) {
                let templateElt = `
                ${elt[i].appliance}
                `
                elt.innerHTML = templateElt;
                appareils.appendChild(elt);
            }


            if (elt[i] && elt[i].ingredients) {
                for (let j = 0; j < elt[i].ingredients.length; j++) {
        
                    let paragrapheGauche = document.getElementById(elt[i].id);
                    let cardText = document.createElement('p');
                    cardText.className = 'card-text';
        
        
                    if (!(elt[i].ingredients[j].unit == undefined) && !(elt[i].ingredients[j].quantity == undefined)) {
                        let templateText = `
                                    
                                        ${elt[i].ingredients[j].ingredient}: &nbsp; ${elt[i].ingredients[j].quantity} ${elt[i].ingredients[j].unit}
                                    
                        `
        
                        cardText.innerHTML = templateText;
                        paragrapheGauche.appendChild(cardText);
                    }
        
                    //-------------------------------- INGREDIENTS --------------------------------
                    //         ingredients = document.getElementById('ingredients');
                    //         optionI = document.createElement('option');
                    //         optionI.setAttribute('value', j)
        
                    //         let templateOptionI = `
        
                    //         ${recipes[i].ingredients[j].ingredient}
        
                    // `
                    //         optionI.innerHTML = templateOptionI;
                    //         ingredients.appendChild(optionI);
        
                    if (i <= (elt.length / 3)) {
                        ingredients = document.getElementById('ingredients1');
                        pI = document.createElement('p');
                        pI.className = 'p-noWrap';
        
                        let templateOptionI = `
                                
                ${elt[i].ingredients[j].ingredient}
                
                `
                        pI.innerHTML = templateOptionI;
                        ingredients.appendChild(pI);
                    } else if ((i > (elt.length / 3)) && (i < deuxTiers)) {
                        ingredients = document.getElementById('ingredients2');
                        pI = document.createElement('p');
                        pI.className = 'p-noWrap';
        
                        let templateOptionI = `
                                
                ${elt[i].ingredients[j].ingredient}
                
                `
                        pI.innerHTML = templateOptionI;
                        ingredients.appendChild(pI);
                    } else {
                        ingredients = document.getElementById('ingredients3');
                        pI = document.createElement('p');
                        pI.className = 'p-noWrap';
        
                        let templateOptionI = `
                                
                ${elt[i].ingredients[j].ingredient}
                
                `
                        pI.innerHTML = templateOptionI;
                        ingredients.appendChild(pI);
                    }
        
        
                }
            }

            if (elt[i] && elt[i].ustensils) {
                for (let k = 0; k < elt[i].ustensils.length; k++ ) {
                    console.log('elt[i].ustensils[k]', elt[i].ustensils[k]);
        
                    //--------------------------------------- USTENSILES ------------------------------------
                    if (!(elt[i].ustensils[k] == undefined)) {
                        ustensiles = document.getElementById('ustensiles');
                        elt = document.createElement('p');
                        elt.className = 'p-noWrap';
        
                        let templateEltU = `
        
                            ${elt[i].ustensils[k]}
        
                    `
                        elt.innerHTML = templateEltU;
                        ustensiles.appendChild(elt);
        
        
                    }
                }
            }


    }
}
let val;
function myKeyUpFilter() {
    let elt = document.getElementById('nameFilter').value;
    console.log('elt', elt);

    valFilter = document.getElementById('elt-filter');
    console.log('filtrage');
    console.log('val', elt);

    let template = `
             <div class="row mt-1 " id="elt-on-off">
                 <div class="col-6">
                     <button class="btn-primary">
                      ${elt} <i class="fa fa-times-circle" id="close" aria-hidden="true"></i>
                     </button>
                 </div>
             </div>
    `
    valFilter.innerHTML = template;
    this.closeElement();

    globa = val;
    val = recipes_temp.filter(item => item.name.toLowerCase().includes(elt.toLowerCase()))

    //this.initTable(val);

    // this.varRecipes = this.recipes_temp.filter(item => item.name.toLowerCase().includes(elt.toLowerCase()));

    console.log('val', val);
    // return elt;
}

function closeElement() {
    let off = document.getElementById('close');
    console.log('off', off);
    off.addEventListener('click', () => {
        let elt = document.getElementById('elt-on-off');
        elt.style.display = 'none';
    })
}

seachFilter = document.getElementById('nameFilter');
seachFilter.addEventListener('click', function (e) {
    // Hamburger menu
    console.log('e.target.classList.contains(\'hamburger-toggle\')', e.target.classList.contains('hamburger-toggle'))
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
}) 
