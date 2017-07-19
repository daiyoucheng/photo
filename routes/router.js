var fs = require("fs");
var formidable = require("node-formidable")
exports.showIndex = function (req,res) {
    if(req.url&&req.url == "/favicon.ico") {
        res.end();
        return;
    }
    var url = "./public/file/"
    var arr = fs.readdirSync(url)
    var data = {};
    data.arr = arr;
    data.value = 1
    res.render("index",data);
    res.end();
}

exports.eranPicture = function (req,res) {
    if(req.url == "/favicon.ico") {
        res.end();
        return;
    }
    var url = "./public/file/" + req.query.url;
    var arr = fs.readdirSync(url);
    var data = {};
    data.url = req.query.url
    data.arr = arr;
    data.value = 2;
    res.send(data)
    res.end();
}

exports.earnFile = function (req,res) {
    if(req.url == "/favicon.ico") {
        res.end();
        return;
    }
    var url = "./public/file/"
    var arr = fs.readdirSync(url)
    var data = {};
    data.url = req.query.url
    data.arr = arr;
    data.value = 4;
    res.render("index",data);
    res.end();
}

