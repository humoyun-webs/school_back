const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {addUser} = require("../../controller/for_admin/users/users")


routes
.post("/add/users",addUser)


module.exports = routes