
var express = require("express");
var router = require("./routes/router");
var formidable = require("node-formidable")
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");

//date format工具
var dateutil = require("dateutil")
var app = express();

//设置view 默认会读（views）
app.set("view engine","ejs");

//修改默认路径为view
app.set("views","view");

//设置静态资源读取路径（）
app.use(express.static("./public"))


app.get("/",router.showIndex);

app.get("/picture",router.eranPicture)

app.get("/file",router.earnFile)

app.post("/fileUpload",function (req,res) {
    if(req.url == "/favicon.ico") {
        res.end();
        return;
    }
    var form = new formidable.IncomingForm()
    //文件保留后最美
    form.keepExtensions = true;
    //多文件上传
    form.multiples=true;
    //临时文件目录
    form.uploadDir = "./public/baocun";
    //设置上传文件的大小
    form.maxFileSize = 20 * 1024 * 1024;
    //设置参数的大小
    //form.maxFieldsSize = 20 * 1024 * 1024;
    var files = [];
    form.on('file', function (filed, file) {
        files.push([filed, file]);
    })
    console.log(form.maxFieldsSize);
    form.parse(req, function(err, fields, files) {
        if(err){
            console.log(err);
        }
       console.log(fields);
        console.log(files);

        if(files.InputFile == undefined){
           res.end();
             return;
        }
        Date.prototype.format = dateutil.format;
        console.log(files.InputFile instanceof Array);
        if(files.InputFile instanceof Array) {
            for (var cc = 0; cc < files.InputFile.length; cc++) {
                var str = new Date().format('Y-m-d-h-s') + parseInt(Math.random() * 123213 + 1111) + path.extname(files.InputFile[cc].name);
                console.log(str);
                fs.rename(files.InputFile[cc].path, "./public/file/" + fields.url + "/" + str, function (err) {
                    if (err) console.log(err)

                });
            }
        }else {
            var str = new Date().format('Y-m-d-h-s') + parseInt(Math.random() * 123213 + 21111) + path.extname(files.InputFile.name);
            console.log(str);
            fs.rename(files.InputFile.path, "./public/file/" + fields.url + "/" + str, function (err) {
                if (err) console.log(err)
            });
        }
        router.showIndex(req,res);
    });
})

app.listen(8888)


