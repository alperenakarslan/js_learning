// // async function test(data) {
// //     // async fonk içinde promise yazılmasa bile fonku promise şeklinde döndürür.
// //     // return data;

// //     let promise = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve("5 saniye bekledik");
// //         }, 5000);
// //     });

// //     let response = await promise; // 5 saniye bekletecek.
// //     //await sadece async fonk'larda çalışmaktadır.
// //     return response;

// // }

// // test("hello").then(response => console.log(response));



// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer giriniz."));
//             }
//         }, 3000);
//     });
//     const response = await promise;
//     return response;

// }

// testData("31")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));


async function getCurrency(url) {
    const response = await fetch(url); // Response objesi oldu

    const data = await response.json(); // json objesi oldu

    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response))
.catch(err => console.log(err));