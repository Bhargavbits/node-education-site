const express=require("express");
const path=require("path");
// const hbs = require("express-handlebars");
require("./db/conn");
const hbs=require("hbs");
const { registerPartials } = require("hbs");

const app=express();
const port=process.env.PORT ||3000;
//setting path for html
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jquery',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);


app.get("/",(req,res)=>{
res.render("index");
})
//contact us
app.get("/contact",(req,res)=>{
    res.render("contact");
    })
app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
})
