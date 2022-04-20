const express = require('express');
const response = require('../../network/response');
// const controller = require('./controller-mail');
const router = express.Router();


// router.get('/', async(req,res) => {
//     // console.log("Entrando al GET network");
//     controller.listPhotos()
//         .then(doc => {
//             response.succes(req, res, doc, 201);
//         })
//         .catch(e => {
//             // console.error("catching error", e);
//             response.error(res,req,'Foto invalida', 400, 'Error al postear foto');
//         })
//     }
// );
const checkData = (reqBody) => {
    console.log("CHECK DATA");
    console.log(reqBody);  
    return new Promise(async (resolve, reject) => {  
        try{
            // let indice = await getIndex();
        
            const newMessage =  reqBody;
            // store.add(newPhoto);
            resolve(newMessage);

        } catch(error) {
            console.error(error);
        }
    })
}

router.post('/', (req, res) => {
    console.log("NETWORK"); 
    // console.log(req.body);
    checkData(req.body)
        .then(newMessage => {
            console.log("Respondiendo: ", newMessage);
            response.succes(req, res, newMessage, 200);
        })
        .catch(e => {
            console.error("catching error", e);
            response.error(req, res, "Error al enviar mail", 400, e);
        })
    }
);


module.exports = router;