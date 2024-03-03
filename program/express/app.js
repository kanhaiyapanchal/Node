const express = require('express');
const app = express();

app.get('/st/:id', function(re,res){
    res.send(re.params);
    
})
app.post("/save",function(re,res){
    res.send("data hase saved")
    
})
app.delete('/delete',function(re,res){
    res.send("your data is deleted success fully")
})

let port = 3033;

app.listen(port,function(){
    console.log("server runiiing.. localhost:"+port)
})