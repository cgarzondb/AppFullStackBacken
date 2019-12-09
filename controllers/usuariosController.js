var mongCli = require('mongodb').MongoClient;
var mongUrl = "mongodb://localhost:27017";

exports.usuarios = function(req, res){
    mongCli.connect(mongUrl, (err,db)=>{
        if(err) throw err;
        var dbo = db.db("local");
        dbo.collection("startup_log").find({}).toArray((err, result)=>{
            if(err) throw err;
            res.send(result);
            db.close();
        });
    });
}