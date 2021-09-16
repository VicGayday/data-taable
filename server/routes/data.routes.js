const Router = require('express')
const router = new Router()
const dataController = require('../controllers/data.controller')

router.post('/', dataController.createData)
router.get('/', dataController.getDatas)
router.get('/:id', dataController.getOneData)
router.put('/', dataController.updateData)
router.delete('/:id', dataController.deleteData)

module.exports = router