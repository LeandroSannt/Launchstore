const express = require("express")
const routes = express.Router()
const HomeController =require("../app/controllers/HomeController")

const products =require("./products")
const users =require("./users")

//routes config

routes.get("/",HomeController.index )
routes.use("/users",users)
routes.use("/products",products)


//alias

routes.get("/ads/create", function (req,res){
    return res.redirect("/products/create")
})

routes.get("/accounts", function (req,res){
    return res.redirect("/users/register")
})

//error page

routes.use(function (req, res) {
    res.status(404).render("not-found");
});





module.exports = routes