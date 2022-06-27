var express = require('express');
var router = express.Router();
var balanceModel = require ('../models/balanceModel')
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
const async = require('hbs/lib/async');


router.get('/operations', async function(req, res, next) {
    let operations = await balanceModel.getTotalOperations();

    operations = operations.map(operations => {
      if (operations.img_id) {
        const imagen = cloudinary.url(operations.img_id, {
          width: 960,
          height: 200,
          crop: 'fill'          
        });
        return {
          ...operations,
          imagen
        }
      } else {
          return {
            ...operations,
            imagen: ''
          }
      }
    });
     
  res.json(operations);

});

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'galarza.hys@gmail.com',
    subject: 'Contacto web - Northern Lights Hunters',
    html: `${req.body.nombre} se puso en contacto a traves de la web porque quiere recibir mas información sobre los destinos grupales.<br>
    Especificó el siguiente mail de contacto: ${req.body.email} y su telefono es: ${req.body.telefono} <br> 
    Mensaje: ${req.body.mensaje}.`
  }

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0af8ffef16201a",
      pass: "e2f8899cec1af1"
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'

  });


});

module.exports = router;