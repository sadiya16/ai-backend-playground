exports.health = (req, res) =>{
    res.json({status: "ok"});
}

exports.hello = (req,res) =>{
    res.send("Hello backend");
}

exports.greatUser = (req,res) =>{
    const name = req.params.name;
    res.send(`Hello ${name}`);
}

exports.echo = (req,res) =>{
    const data = req.body;

    res.json({
        received: data,
    });
}