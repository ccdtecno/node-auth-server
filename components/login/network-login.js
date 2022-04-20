const express = require('express');
const response = require('../../network/response');
const controller = require('./controller-login');
const router = express.Router();


router.get('/', async(req,res) => {
    console.log("Entrando al GET login");

    // readMessage(req.body).then(doc => {
    //         response.succes(req, res, doc, 201);
    //     })
    //     .catch(e => {
    //         // console.error("catching error", e);
    //         response.error(res,req,'no hay credenciales suficientes', 400, 'Error al logear');
    //     })
    }
);

// const checkData = (reqBody) => {
//     console.log("CHECK DATA");
//     console.log(reqBody);
//     return new Promise(async (resolve, reject) => {
//         try{
//             // let indice = await getIndex();

//             const newMessage =  reqBody;
//             // store.add(newPhoto);
//             resolve(newMessage);

//         } catch(error) {
//             console.error(error);
//         }
//     })
// }

router.post('/', (req, res) => {
  // console.log(req);
    controller.readMessage(req.body).then(doc => {
          // console.log(doc);
          // response.succes(req, res, doc, 200);
          response.redirect(req,res,doc,300,"www.centroculturadigital.")
      })
      .catch(e => {
          // console.error("catching error", e);
          response.error(res,req,'no hay credenciales suficientes', 400, 'Error al logear');
      })
    }
);


module.exports = router;
