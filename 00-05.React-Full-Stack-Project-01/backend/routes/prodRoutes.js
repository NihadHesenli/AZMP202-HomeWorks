const express = require('express')

const {getTheData , getTheDataById ,searchByTitle , addNewData ,deleteById} = require("../controllers/prodContr")

const router = express.Router()

router.get('/',getTheData)
router.get('/search',searchByTitle)
router.get('/:id',getTheDataById)
router.delete('/:id',deleteById)
router.post('/',addNewData)

module.exports = router