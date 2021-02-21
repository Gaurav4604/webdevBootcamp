const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const input = form.elements[0].value;
    // the config object handles multiple configurations
    // required by the search request
    // params is giving the parameters to the query (more than one parameters can be acommodated)
    const config = {
        params: {
            q: input
        }
    }
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // const url = response.data[0].show.image.medium;
    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);
    imgMaker(response.data);
});

const imgMaker = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium; //getting the image link from the api
            document.body.append(img);
        }
    }
}