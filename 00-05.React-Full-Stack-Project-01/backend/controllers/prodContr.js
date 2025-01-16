const products = require('../modules/prodModule')

const getTheData = async(req,res)=>{
    try {
        const product = await products.find({})
        res.send(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getTheDataById = async(req,res)=>{
    const {id}= req.params;
    try {
        const product = await products.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const searchByTitle = async(req,res)=>{
    const {title} = req.query
    try {
        const product = await products.find({title : { $regex : title , $options : "i" }})
        res.json({data : product , message: "success!"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const deleteById = async(req,res)=>{
    const {id}= req.params;
    try {
        const deleted = await products.findByIdAndDelete(id)
        res.status(201).json(deleted)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const addNewData = async(req,res)=>{
    const {title,description,price,image_Url} = req.body;

    if (!title || !description || !price || !image_Url) {
        return res.status(404).json({message : 'xanalari bos qoyma'})
    }
    try {
        const newData = products({...req.body})
        await newData.save()
        res.status(201).json({data : newData , message : "ugurla yuklendi"})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

module.exports = { getTheData , getTheDataById ,searchByTitle , addNewData , deleteById}
