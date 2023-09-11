const scheduleController = require('../controllers/schedule.controller');
const router = require('express').Router();

router.post('/', scheduleController.create);
router.get('/', scheduleController.getScheduleAndDoctors);
router.put('/:id', scheduleController.update);
router.put('/:id', scheduleController.update);
router.delete('/:id', scheduleController.delete);
router.get('/:id', scheduleController.findOne);

module.exports = router;
