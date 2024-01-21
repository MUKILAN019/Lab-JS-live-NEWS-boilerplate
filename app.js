// Progression 1: create a function and fetch the api using axios
axios
  .get(
    'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=0ab7c0a87eccd66c7808c99dfd26689a'
  )
  .then((response) => {
    console.log('Success data fetch', response.data.articles);
    let dataSpread = [...response.data.articles];
    display(dataSpread);
  })
  .catch((error) => {
    console.log('error1', error);
  });

function display(data) {
  let container = document.getElementById('container');
  data.forEach(function (element, index) {
    container.innerHTML += `
        <div >
          <h1>${element.title}</h1>
          <img src='${element.image}' alt='${element.image}'/>
          <p>${element.content}<p>
        </div>
    `;
  });
}
