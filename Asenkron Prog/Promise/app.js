// function getData(data) {// promise objesi döndüren fonk.

//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data);
//             } else {
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         }, 5000);
//     });
// }

// getData(31)
//     .then(response =>
//         console.log(response)
//     )
//     .catch(err =>
//         console.error(err)
//     );




function addNb(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Lütfen sayı giriniz..."));
            }
        }, 3000)
    });
}

addNb(10)
    .then(response => {
        console.log(response);
        return response + 2;
    }).then((response2) => console.log(response2))
    .catch(err => console.error(err));

    // 1 tane catch ve birden fazla then kullanılabilir ve buna da Promise Chain adı verilir.