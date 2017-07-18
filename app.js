/**
 * Created by Administrator on 2017/7/18 0018.
 */
//http://blog.csdn.net/devil13th/article/details/50404351
var express = require("express");
var router = require("./routes/router");
var formidable = require("node-formidable")
var ejs = require("ejs")
var app = express();
var bodyParser  = require("body-parser");
app.set("view engine","ejs");
app.set("views","view")
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",router.showIndex);

app.get("/picture",router.eranPicture)

app.get("/file",router.earnFile)

app.post("/fileUpload",function (req,res) {
    if(req.url == "/favicon.ico") {
        res.end();
        return;
    }
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = "./public/file/cat";
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files)
        res.end();
    });
})

app.listen(8888)


