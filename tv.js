const form = document.querySelector('#tvsearch');
const input = document.querySelector('#search');
const space = document.querySelector('#container-fluid')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm =form.elements.search.value;
    const config = {params:{q:searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    makeImages(res.data);
    form.elements.search.value = "";
});
const makeImages = (shows) =>{
for (let result of shows){
    if(result.show.image){
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        img.setAttribute('class', 'img-fluid');
        document.body.childNodes[1].append(img);
    }

}
}