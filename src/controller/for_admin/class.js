const Joi = require("joi")
const Users = require("../../model/for_admin/class")
const joi = require("joi")

const AddClass = async(req,res) =>{
    try{
        const {num, lett, descr} = req.body

        const scheme = Joi.object({
            num:Joi.number().min(1).max(11).required(),
            lett:Joi.string().max(1).required(),
            descr:Joi.string().required()
        })
    
        const {error} = scheme.validate({num, lett, descr})
    
        if(error){
            return res.status(400).json({message:error.message})
        }
    
        const newclass = await Users.addclass(num, lett, descr)
    
        return res.status(201).json({message:"Created", newclass})
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
    }
} 

module.exports = {
    AddClass
}