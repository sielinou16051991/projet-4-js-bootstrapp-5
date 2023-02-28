
function  motFiltre(){

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
       valFilter.innerHTML= template;
       this.closeElement();
   }

   function myKeyUpFilter() {
    let elt = document.getElementById('nameFilter').value;
    console.log('elt', elt);
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
