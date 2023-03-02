let varRecipes = recipes;
let recipes_temp = recipes;
let globa = [];
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


// CONSTRUCTION DES BOUTONS SELECTS
selectContent = document.getElementById('select-content');
divSelect1 = document.createElement('div');
divSelect1.className = 'col-2';
divSelect2 = document.createElement('div');
divSelect2.className = 'col-2';
divSelect3 = document.createElement('div');
divSelect3.className = 'col-2';

templateSelectIngredients = `
    <li class="nav-item dropdown dropdown-mega position-static btn bg-color1 go-left">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
            data-bs-auto-close="outside">Ingredients</a>
        <div class="dropdown-menu shadow hauteur marge-smal-block">
            <div class="mega-content px-1">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-12 col-sm-4 py-2 bg-color1" id="ingredients1">
                        
                        </div>
                        <div class="col-12 col-sm-4 py-2 bg-color1" id="ingredients2">
                        
                        </div>
                        <div class="col-12 col-sm-4 py-2 bg-color1" id="ingredients3">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>

`

divSelect1.innerHTML = templateSelectIngredients;
selectContent.appendChild(divSelect1);



templateSelectAppareils = `
                     
 <li class="nav-item dropdown dropdown-mega btn bg-color2 marge">
     <a class="nav-link dropdown-toggle bg-color2" href="#" data-bs-toggle="dropdown"
         data-bs-auto-close="outside">Appareils</a>
     <div class="dropdown-menu shadow hauteur marge-block">
         <div class="mega-content px-1">
             <div class="container-fluid">
                 <div class="row ">
                     <div class="col-12 bg-color2" id="appareils">
                     
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </li>
`
divSelect3.innerHTML = templateSelectAppareils;
selectContent.appendChild(divSelect3);



templateSelectUstensiles = `
                     
 <li class="nav-item dropdown dropdown-mega position-static btn bg-color3 marge-large">
     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
         data-bs-auto-close="outside">Ustensiles</a>
     <div class="dropdown-menu shadow hauteur marge-large-block">
         <div class="mega-content px-1">
             <div class="container-fluid">
                 <div class="row ">
                     <div class="col-12 bg-color3" id="ustensiles">

                     </div>
                 </div>
             </div>
         </div>
     </div>
 </li>  
`
divSelect2.innerHTML = templateSelectUstensiles;
selectContent.appendChild(divSelect2);

deuxTiers = 2 * varRecipes.length / 3;
// CONSTRUCTION DES CARDS

this.initTable(varRecipes);


function initTable(elt) {
    console.log('globa', globa);
    if(globa && (globa.length > 0)){
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
        if (!(elt[i].appliance)) {
            appareils = document.getElementById('appareils');
            elt = document.createElement('p');
            elt.className = 'p-noWrap';

            let templateElt = `

                ${elt[i].appliance}

        `
            elt.innerHTML = templateElt;
            appareils.appendChild(elt);

        }

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

        // for (let k = 0; k < elt[i].ustensils.length; k++ ) {
        //     console.log('elt[i].ustensils[k]', elt[i].ustensils[k]);
            
        //     //--------------------------------------- USTENSILES ------------------------------------
        //     if (!(elt[i].ustensils[k] == undefined)) {
        //         ustensiles = document.getElementById('ustensiles');
        //         elt = document.createElement('p');
        //         elt.className = 'p-noWrap';

        //         let templateEltU = `

        //             ${elt[i].ustensils[k]}

        //     `
        //         elt.innerHTML = templateEltU;
        //         ustensiles.appendChild(elt);


        //     }
        // }


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
    val =recipes_temp.filter(item => item.name.toLowerCase().includes(elt.toLowerCase()))
    
    this.initTable(val);
    
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

document.addEventListener('click', function (e) {
    // Hamburger menu
    console.log('e.target.classList.contains(\'hamburger-toggle\')', e.target.classList.contains('hamburger-toggle'))
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
}) 