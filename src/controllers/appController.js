exports.health = (req, res) =>{
    res.json({status: "ok"});
}

exports.hello = (req,res) =>{
    res.send("Hello backend");
}