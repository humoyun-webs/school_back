const {Router} = require("express")
const routes = Router()
const {loginU} = require("../../controller/auth/login")


routes
.post('/login', loginU)



module.exports = routes