// // const store = require('./store-mail');
// // const Photo = require('./model-mail');

// const getIndex = async () => {
//     let index = await store.index();
//     return index;
// }

// const addPhoto = (reqBody) => {
//     // console.log("Estoy en el controller");  
//     return new Promise(async (resolve, reject) => {  
//         try{
//             let indice = await getIndex();
        
//             const newPhoto = new Photo({
//                 image: reqBody.result,
//                 index: indice,
//             })  
//             store.add(newPhoto);
//             resolve(newPhoto);

//         } catch(error) {
//             console.error(error);
//         }
//     })
// }

// const getPhoto = () => {}

// const listPhotos = () => {
//     console.log("Listando fotos");
//     return new Promise((resolve, reject ) => {
//         resolve(store.list());
//       });
// }



// module.exports = {
//     addPhoto,
//     getPhoto,
//     listPhotos,
//   }