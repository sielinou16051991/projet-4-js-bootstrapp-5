function motFiltre() {

    console.log('recipes', recipes);
    valFilter = document.getElementById('elt-filter');
    console.log('filtrage');
    let val = myKeyUpFilter();
    console.log('val', val);

    let template = `
                <div class="row mt-1 " id="elt-on-off">
                    <div class="col-6">
                        <button class="btn-primary">
                         ${val} <i class="fa fa-times-circle" id="close" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
       `
    valFilter.innerHTML = template;
    this.closeElement();
}


// CONSTRUCTION DES BOUTONS SELECTS
selectContent = document.getElementById('select-content');
divSelect1 = document.createElement('div');
divSelect1.className = 'col-2 m-2';
divSelect2 = document.createElement('div');
divSelect2.className = 'col-2 m-2';
divSelect3 = document.createElement('div');
divSelect3.className = 'col-2 m-2';

templateSelectIngredients = `
    <li class="nav-item dropdown dropdown-mega position-static btn btn-primary">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
            data-bs-auto-close="outside">Ingredients</a>
        <div class="dropdown-menu shadow">
            <div class="mega-content px-1">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-12 col-sm-4 col-md-3 py-3" id="ingredients1">
                            <p>Description goes here...</p>
                        </div>
                        <div class="col-12 col-sm-4 col-md-3 py-3" id="ingredients2">
                            <p>Description goes here...</p>
                        </div>
                        <div class="col-12 col-sm-4 col-md-3 py-3" id="ingredients3">
                            <p>Description goes here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>



`
divSelect1.innerHTML = templateSelectIngredients;
selectContent.appendChild(divSelect1);

templateSelectUstensiles = `
                     
 <li class="nav-item dropdown dropdown-mega position-static btn btn-secondary">
     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
         data-bs-auto-close="outside">Ustensiles</a>
     <div class="dropdown-menu shadow">
         <div class="mega-content px-4">
             <div class="container-fluid">
                 <div class="row ">
                     <div class="col-12 col-sm-4 col-md-3 py-3" id="ustensiles">
                         <p>Description goes here...</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </li>  
`

divSelect2.innerHTML = templateSelectUstensiles;
selectContent.appendChild(divSelect2);

templateSelectAppareils = `
                     
 <li class="nav-item dropdown dropdown-mega position-static btn btn-denger">
     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
         data-bs-auto-close="outside">Appareils</a>
     <div class="dropdown-menu shadow">
         <div class="mega-content px-4">
             <div class="container-fluid">
                 <div class="row ">
                     <div class="col-12 col-sm-4 col-md-3 py-3" id="appareils">
                         <p>Description goes here...</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </li>
`
divSelect3.innerHTML = templateSelectAppareils;
selectContent.appendChild(divSelect3);


deuxTiers = 2*recipes.length/3;

// CONSTRUCTION DES CARDS
for (let i = 0; i < recipes.length; i++) {

    // for (let p = 0; p < recipes[i].length; p++) {
    // }
    let coloneElement = document.getElementById('colone');
    let card = document.createElement('div');
    card.className = 'col';

    let templateCard = `
        <div class="card"> 
            <figure class="figure">        
                <img src="..." class="figure-img img-fluid rounded" alt="...">
            </figure> 
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <h5 class="card-title">${recipes[i].name}</h5>
                    </div>
                    <div class="col-4">
                        <p><i class="fa fa-clock-o" aria-hidden="true"></i> ${recipes[i].time} &nbsp; minutes</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6" id="${recipes[i].id}">

                    </div>
                    <div class="col-6  text-hidden">
                        <p class="card-text">
                            ${recipes[i].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
`
    card.innerHTML = templateCard;
    coloneElement.appendChild(card);

    for (let j = 0; j < recipes[i].ingredients.length; j++) {

        let paragrapheGauche = document.getElementById(recipes[i].id);
        let cardText = document.createElement('p');
        cardText.className = 'card-text';


        if ((recipes[i].ingredients[j].unit == undefined) || (recipes[i].ingredients[j].quantity == undefined)) {
            recipes[i].ingredients[j].unit = ' ';
            recipes[i].ingredients[j].quantity = ' ';
        }
        let templateText = `
                    
                        ${recipes[i].ingredients[j].ingredient}: &nbsp; ${recipes[i].ingredients[j].quantity} ${recipes[i].ingredients[j].unit}
                    
        `

        cardText.innerHTML = templateText;
        paragrapheGauche.appendChild(cardText);

        // USTENSILES
        ustensiles = document.getElementById('ustensiles');
        optionU = document.createElement('option');
        optionU.setAttribute('value', j)

        let templateOptionU = `
                        
        ${recipes[i].ustensils[j]}
        
`
        optionU.innerHTML = templateOptionU;
        ustensiles.appendChild(optionU);

        
        // INGREDIENTS
//         ingredients = document.getElementById('ingredients');
//         optionI = document.createElement('option');
//         optionI.setAttribute('value', j)

//         let templateOptionI = `
                        
//         ${recipes[i].ingredients[j].ingredient}
        
// `
//         optionI.innerHTML = templateOptionI;
//         ingredients.appendChild(optionI);
 
if (i <= (recipes.length/3)) {
    ingredients = document.getElementById('ingredients1');
    pI = document.createElement('p');
    
    let templateOptionI = `
                    
    ${recipes[i].ingredients[j].ingredient}
    
    `
    pI.innerHTML = templateOptionI;
    ingredients.appendChild(pI);
} else if ((i > (recipes.length/3)) && (i < deuxTiers)){
    ingredients = document.getElementById('ingredients2');
    pI = document.createElement('p');
    
    let templateOptionI = `
                    
    ${recipes[i].ingredients[j].ingredient}
    
    `
    pI.innerHTML = templateOptionI;
    ingredients.appendChild(pI);
}else {
    ingredients = document.getElementById('ingredients3');
    pI = document.createElement('p');
    
    let templateOptionI = `
                    
    ${recipes[i].ingredients[j].ingredient}
    
    `
    pI.innerHTML = templateOptionI;
    ingredients.appendChild(pI);
}

        
        // APPAREILS
        appareils = document.getElementById('appareils');
        optionA = document.createElement('option');
        optionA.setAttribute('value', j)

        let templateOptionA = `
                        
        ${recipes[i].ingredients[j].appareils}
        
`
        optionA.innerHTML = templateOptionA;
        appareils.appendChild(optionA);

    }
}





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
    return elt;
}

function closeElement() {
    let off = document.getElementById('close');
    console.log('off', off);
    off.addEventListener('click', () => {
        let elt = document.getElementById('elt-on-off');
        elt.style.display = 'none';
    })
}

document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 