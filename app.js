/**
 * Created by Administrator on 2017/7/18 0018.
 */
//http://blog.csdn.net/devil13th/article/details/50404351
var express = require("express");
var router = require("./routes/router");
var formidable = require("node-formidable")
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");
var dateutil = require("dateutil")
var app = express();


app.set("view engine","ejs");
app.set("views","view")
app.use(express.static("./public"))


app.get("/",router.showIndex);

app.get("/picture",router.eranPicture)

app.get("/file",router.earnFile)

app.post("/fileUpload",function (req,res) {
    if(req.url == "/favicon.ico") {
        res.end();
        return;
    }

       form.keepExtensions = true;
    form.multiples=true;
    form.uploadDir = "./public/baocun";
    form.maxFieldsSize = 20 * 1024 * 1024;
    var files = [];
    form.on('file', function (filed, file) {
        files.push([filed, file]);
    })

    form.parse(req, function(err, fields, files) {
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


