$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = ($('#searchText').val());
    getImages(searchText);
    // console.log($('#searchText').val());
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
         `
      });
      $('#images').html(output);
      console.log(output);
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(searchText);
}

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
