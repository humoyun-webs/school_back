const {Router} = require("express")
const routes = Router()
const {loginU} = require("../controller/auth/login")
const {CheckRole} = require("../middlewares/check-role-middleware")
const {isAuth} = require("../middlewares/isAuth-middleware")
const {AddClass} = require("../controller/for_admin/class")
const {addUser} = require("../controller/for_admin/users")
const {addSide} = require("../controller/for_admin/side")
const {addNews} = require("../controller/for_admin/news")
const {addPupil} =require("../controller/for_users/pupils")



routes
.post('/login', loginU)
.post('/add/class', AddClass)
.post("/add/users",addUser)
.post("/add/side",addSide)
.post("/add/news", addNews)
.post("/add/pupil", isAuth, CheckRole("teacher"), addPupil)

module.exports = {routes}


