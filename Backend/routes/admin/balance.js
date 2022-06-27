var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var balanceModel = require('../../models/balanceModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function(req, res, next) {
    var operations = await balanceModel.getOperations();
    var sumPos = await balanceModel.sumPos();
    var sumNeg = await balanceModel.sumNeg();
    var totalBalance = await balanceModel.totalBalance();


    operations = operations.map(operation => {
          return {
            ...operation
            
          }
  })
  ;

         
  res.render('admin/balance', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      operations,
      sumPos,
      sumNeg,
      totalBalance
      
  });
});

router.get('/:type', async function(req, res, next) {
  var type = req.params.type;
  var getOperationsByType = await balanceModel.getOperationsByType(type);
  var sumPos = await balanceModel.sumPos();
  var sumNeg = await balanceModel.sumNeg();
  var totalBalance = await balanceModel.totalBalance();

  if (type != "") {

  getOperationsByType = getOperationsByType.map(operation => {
        return {
          ...operation
          
        }
}) } else {

  operations = operations.map(operation => {
    return {
      ...operation
      
    }
})};

       
res.render('admin/balance_filt', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    getOperationsByType,
    sumPos,
    sumNeg,
    totalBalance
    
});
});

router.get('/new/data', (req, res, next) => {

  res.render('admin/new', {
      layout: 'admin/layout',
      });
});

router.post('/new', async (req, res, next) => {
  try {

        if (req.body.concept != "" && req.body.amount != "" && req.body.date != "" && req.body.type != "") {

        await balanceModel.insertOperation({
          ...req.body
        });

        res.redirect('/admin/balance')
      } else {
        res.render('admin/new', {
          layout: 'admin/layout',
          error: true,
          message: 'All fields are required'
        })
      }
  } catch (error) {
    console.log(error)
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'The operation was not created'
    })
  }
})

router.get ('/delete/:id', async (req, res, next) => {
  var id = req.params.id;

  let operation = await balanceModel.getOperationById(id);
  if (operation.id) {
    await (destroy(operation));
  }

  await balanceModel.deleteOperationsById(id);
  res.redirect('/admin/balance');
});


router.get ('/modify/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var operation = await balanceModel.getOperationById(id);

  res.render('admin/modify', {
    layout: 'admin/layout',
    operation
  })
});

router.post('/modify', async (req, res, next) => {
  try {

      var obj = {
      concept: req.body.concept,
      amount: req.body.amount,
      date: req.body.date,
    }
    console.log(obj)

    await balanceModel.modificarOperationById(obj, req.body.id);
    res.redirect('/admin/balance');

  } catch (error) {
      console.log(error)
      res.render('admin/modify', {
        layout: 'admin/layout',
        error: true,
        message: 'The operation was not modified'
      })
  }
})

module.exports = router;