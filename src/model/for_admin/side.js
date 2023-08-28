const {fetch,fetchOne} = require("../../utils/pg");

const sideadd = "insert into side(title, description, photo)values($1, $2, $3)"

const addSide  =(title, descr, path) => fetchOne(sideadd, title, descr, path)


module.exports = {addSide};