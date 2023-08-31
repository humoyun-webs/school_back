const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {AddClass,ClassCount} = require("../../controller/for_admin/class/class")

routes
.post('/add/class',isAuth,CheckRole("superadmin"), AddClass)
.get("/count/classes", ClassCount)


module.exports = 
    routes
