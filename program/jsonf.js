const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application/json'});
    var jsonO = {
        name:'krishav',
        age:22
    }
    var url = req.url;
    if('/krishav' == url){
        res.end("gread jos")
    }
    console.log(url)
    res.end(JSON.stringify(jsonO));
}).listen(200,function(){
    console.log("ruuing")
})