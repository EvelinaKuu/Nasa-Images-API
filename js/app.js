$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    const searchText = ($('#searchText').val());
    getImages(searchText);
    e.preventDefault();
  });
});

function getImages(searchText){
  axios.get('https://images-api.nasa.gov/search?q='+searchText)
    .then((response) => {
      const images = response.data.collection.items;
      let output = '';
      $.each(images, (index, image) => {
        output += `
          <div class="">
            <div class="">
            <img src=${image.links[0].href}></img>
            </div>
          </div>
         `;
      });
      $('#nasa-images').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
