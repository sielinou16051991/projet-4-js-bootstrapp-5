export default class Api {
    async getData() {
        let base_url = './script/recipes.js';
    
        let res = await fetch(base_url);
        console.log('res', res);
        console.log('base_url', base_url);
        let res1 = document.getElementById('test1');
        res1.textContent = 'texte d\'essay : ';
    
    }
}