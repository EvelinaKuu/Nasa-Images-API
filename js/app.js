$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = ($('#searchText').val());
    getImages(searchText);
    e.preventDefault();
  });
});


function getImages(searchText){
  axios.get('https://images-api.nasa.gov/search?q='+searchText)
    .then((response) => {
      console.log(response.data.collection);
      let images = response.data.collection;
      let output = '';
      $.each(images, (index, image) => {
        output += `
          <div class="">
            <div class="">
            <p>${image.items}</p>
            </div>
          </div>
         `;
      });
      $('#images').html(output);
      console.log(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
