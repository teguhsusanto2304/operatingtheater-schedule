const roomController = require('../controllers/room.controller');
const router = require('express').Router();

router.post('/', roomController.create);
router.get('/', roomController.findAll);
router.put('/:id', roomController.update);
router.put('/:id', roomController.update);
router.delete('/:id', roomController.delete);
router.get('/:id', roomController.findOne);

module.exports = router;
