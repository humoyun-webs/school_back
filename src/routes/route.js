const {Router} = require("express")
const routes = Router()
const {loginU} = require("../controller/auth/login")
const {CheckRole} = require("../middlewares/check-role-middleware")
const {isAuth} = require("../middlewares/isAuth-middleware")
const {AddClass,ClassCount} = require("../controller/for_admin/class")
const {addUser} = require("../controller/for_admin/users")
const {addSide} = require("../controller/for_admin/side")
const {addNews,EditNews,getNews,getNewsbyid, DeleteNews} = require("../controller/for_admin/news")
const {addPupil,EditPupil,DeletePupil,Getpupils,Getpupilbyid} =require("../controller/for_users/pupils")



routes
.post('/login', loginU)
.post('/add/class', AddClass)
.post("/add/users",addUser)
.post("/add/side",addSide)
.post("/add/news", addNews)
.post("/add/pupil", isAuth, CheckRole("teacher"), addPupil)
.put("/edit/pupil/:id",isAuth,CheckRole("teacher"),EditPupil)
.delete("/delete/pupil/:id",isAuth,CheckRole("teacher"), DeletePupil)
.get("/get/pupils",isAuth,Getpupils)
.get("/get/pupils/:id",isAuth,Getpupilbyid)
.get("/count/classes", ClassCount)
.put("/edit/news/:id",isAuth,EditNews)

module.exports = {routes}


