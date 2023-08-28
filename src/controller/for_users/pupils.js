const Joi = require("joi");
const Pupil = require("../../model/for_users/pupils")
const jwt = require("jsonwebtoken")
const {v4:uuid} = require("uuid");


const addPupil = async (req, res) => {
    try{

      const token = await req.headers["authorization"].split(" ")[1];
      const {name, l_name, age, congr, descr} = req.body;
      
      const {image} = req.files
      
      const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    
   
    const id = decoded.id;
    console.log(id);
    // console.log(id);
    const scheme = Joi.object({
        name: Joi.string().min(1).max(32).required(),
          l_name:Joi.string().required(),
          age:Joi.number().required(),
      });

      const { error } = scheme.validate({ name, l_name, age  });
      
      if (error) {
        return res.status(400).json({ message: error.message });
      }


      
      const format = image.mimetype.split("/")[1];
    
      const ImageLink = `${uuid()}` + `.${format}`;

      
      const path = `${process.cwd()}/src/upload/${ImageLink}`;
    
      // console.log(hashpassword);
      const newUser = await Pupil.addpupil(name, l_name, age, congr, descr,ImageLink,id);
      image.mv(path);
      return res.status(200).json({ message: "success", newUser });
    }catch(error){
  return res.status(404).json({message: error.message})
  }};

  module.exports = {
    addPupil
  }