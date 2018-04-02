
var entireCollection;

fetch('/artworks/all')
.then(response => response.json())
.then(json => {
  entireCollection = json;
  list(entireCollection);
});

function list(artworks) {
  let collection = document.getElementById('collection');
  layout = ''
  for (let i = 0; i < entireCollection.length; i++) {
    layout += `
    <div class="artwork">
      <div>
        <img class="artwork_image" alt="${entireCollection[i].artworkTitle}" src="${entireCollection[i].artworkImage[0]}">
      </div>
      <div>
        <div>
          <h3>${entireCollection[i].artist}</h3>
          <h3>${entireCollection[i].artworkTitle}</h3>
          <p>${entireCollection[i].artworkCollection}</p>
          <br></br>
          <p>${entireCollection[i].artworkYear}</p>
          <p>${entireCollection[i].artworkMedium}</p>
          <p>${entireCollection[i].artworkEdition}</p>
          <p>${entireCollection[i].artworkSigned}</p>
          <p>${entireCollection[i].artworkDimensions}</p>
          <p>£${entireCollection[i].artworkPrice}</p>
        </div>
      </div>
    </div>
    `
  };
  collection.innerHTML = layout;
};
