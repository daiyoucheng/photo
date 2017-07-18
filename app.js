/**
 * Created by Administrator on 2017/7/18 0018.
 */

var express = require("express");
var router = require("./routes/router");
var ejs = require("ejs")
var app = express();
var bodypaeser = require("body-parser");
app.set("view engine","ejs");
app.set("views","view")
app.use(bodypaeser.urlencoded({extended:false}));
app.use(bodypaeser.json());
app.use(express.static("./public"))

app.get("/",router.showIndex);

app.get("/picture",router.eranPicture)

app.get("/file",router.earnFile)

app.listen(8888)


