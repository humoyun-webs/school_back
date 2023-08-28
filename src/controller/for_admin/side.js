const Side = require("../../model/for_admin/side")
const Joi = require("joi")
const {v4:uuid} = require("uuid");


const addSide= async (req, res) =>{
    try{
        const {title, descr} = req.body

        const {image} = req.files
        const scheme = Joi.object({
            title:Joi.string().max(150).required(),
            descr:Joi.string().required(),
            
        })
    
        const {error} = scheme.validate({title, descr})
    
        if(error){
            return res.status(400).json({message:error.message})
        }

        const format = image.mimetype.split("/")[1];
    
      const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
    
        const newSide = await Side.addSide(title, descr,ImageLink)

        image.mv(path)
    
        return res.status(201).json({message:"Created", newSide})
        
        
    }catch(error){
        return res.status(404).json({message:"Permission denied", error})
    }
}

module.exports = {
    addSide
}