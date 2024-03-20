function getTextFile() { // Text dosyasından veri çekme

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch (err => console.log(err));

}

function getJsonFile(){ // Localdeki JSON'dan veri çekme

    fetch("example.json")
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(err => console.log(err));
}

function getExternalAPI(){

    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data.error.code);
    })
    .catch(err => console.log(err));
}

getExternalAPI();
// getTextFile();
// getJsonFile();

//https://api.exchangeratesapi.io/latest