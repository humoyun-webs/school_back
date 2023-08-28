const {fetch,fetchOne} = require("../../utils/pg");

const newadd = "insert into news(title, descr, photo)values($1, $2, $3)"

const addnew  =(title, descr, imageLink) => fetchOne(newadd, title, descr, imageLink)


module.exports = {addnew};