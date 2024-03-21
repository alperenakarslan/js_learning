class Request {
    async get(url) { // Get Request

        const response = await fetch(url); // response ogject
        const data = await response.json(); // JSON object
        return data;

    }

    async post(url,data) {

        const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
        const datas = await response.json();
        return datas;

    }

    async put(url,data) {

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const datas = await response.json();
        return datas;
    }

    async delete(url) {

        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE',
        });
        return "Veri silme işlemi başarılı";
    }
}

const request = new Request();

//get
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums);
// })
// .catch(err => console.log(err));

// console.log(albums); // Asenkron

//post
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err));

//put
// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Tarkan Karma" })
// .then(newAlbums => console.log(newAlbums))
// .catch(err => console.log(err));

// delete
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message => console.log(message))
// .catch(err => console.log(err));
