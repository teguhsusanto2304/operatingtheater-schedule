const doctorController = require('../controllers/doctor.controller');
const router = require('express').Router();

router.post('/', doctorController.create);
router.get('/', doctorController.findAll);
router.put('/:id', doctorController.update);
router.put('/:id', doctorController.update);
router.delete('/:id', doctorController.delete);
router.get('/:id', doctorController.findOne);

module.exports = router;
