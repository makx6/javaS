let requestURL = 'http://46.101.146.101:8081/categories/';

function sendRequest(method, url) {
    return fetch(url)
        .then(response => {
            return response.json();
        });
}

sendRequest('GET', requestURL)
    .then(data => loadItems(data))
    .catch(error => console.log(error));

function loadItems(arr) {
    // Loading items to page
    let container = document.querySelector('.container');

    // Get object from array
    for (let i of arr) {
        let item = document.createElement('div');
        item.className = 'item';
        let title = document.createElement('h3');
        title.className = 'title';
        let id = document.createElement('p');
        id.className = 'id';
        let img = document.createElement('img');
        img.className = 'img';

        item.appendChild(title);
        item.appendChild(id);
        item.appendChild(img);
        container.appendChild(item);

        title.innerHTML = i.title;
        id.innerHTML = i.id;
        img.setAttribute('src', i.category_image_url);
    }
}