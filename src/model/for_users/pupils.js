const {fetch,fetchOne} = require("../../utils/pg")

const  pupiladd = "insert into pupils(name, l_name, age, congrolutation, descr, photo, user_id)values($1, $2, $3, $4, $5, $6,$7)"

// const checknumandlet = "SELECT class_id FROM class WHERE number = $1 AND letter = $2"

const addpupil = (name, l_name, age, congr, descr, photo,user_id) => fetchOne(pupiladd, name, l_name, age,congr,descr, photo, user_id)
// const findbyemail  = (email) =>fetchOne(byemail,email)
// const numletcheck = (num, lett) => fetchOne(checknumandlet, num, lett)


module.exports = {addpupil}