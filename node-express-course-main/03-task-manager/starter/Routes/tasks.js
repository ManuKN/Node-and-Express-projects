const express = require('express');
const controller = require('../Controller/tasks')

const router = express.Router();

router.route('/').get(controller.getAllTasks).post(controller.createTask)
router.route('/:id').get(controller.getTask).patch(controller.updateTask).delete(controller.deleteTask)
 
module.exports = router;