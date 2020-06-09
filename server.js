var a1=require('./public/data1.json'); 
var express=require('express');
var app=express();

app.use(express.static("public"));
app.get("/extraRun", function(req,res){ 
    
    var season=req.query.year;
    var result=a1.extraRun[season];
    res.send(result);
})

app.listen(process.env.PORT || 8081, () => console.log('Gator app listening on port')); 