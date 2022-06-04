var express = require('express');
var router = express.Router();

var alumno = require('../controllers/alumnoController.js');

router.get('/', alumno.list);
router.get('/show/:id', alumno.show);
router.get('/create', alumno.create);
router.post('/save', alumno.save);
router.get('/edit/:id', alumno.edit);
router.post('/update/:id', alumno.update);
router.post('/delete/:id', alumno.delete);

module.exports = router;
