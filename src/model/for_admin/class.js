const {fetch,fetchOne} = require("../../utils/pg");

const classadd = "insert into class(number, letter, descr)values($1, $2, $3)"

const addclass  =(num, lett, descr) => fetchOne(classadd, num, lett, descr)


module.exports = {addclass};