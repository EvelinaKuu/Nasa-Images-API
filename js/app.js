$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    const searchText = ($('#searchText').val());
    getImages(searchText);
    e.preventDefault();
  });
});

function getImages(searchText){
  axios.get('https://images-api.nasa.gov/search?q='+searchText+'&media_type=image')
    .then((response) => {
      const images = response.data.collection.items;
      let output = '';
      $.each(images, (index, image) => {
        output += `
          <div class="image-box">
            <img src=${image.links[0].href} class="img"></img>
          </div>
         `;
      });
      $('#nasa-images').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
