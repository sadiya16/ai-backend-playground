const db = require("../db/database");


exports.getNotes = (req,res)=>{
    const { userId } = req.query
   db.all("SELECT * FROM notes where user_id = ? ",[userId],(err,rows) => {
    if(err) return res.status(500).json({error:err.message});

    res.json(rows);
   });
}

exports.createNote = (req,res)=>{
    const { text, userId } = req.body;

    db.run(
        "INSERT INTO notes(text, user_id) VALUES(?, ?)",
        [text, userId],
        function (err){
            if (err) return res.status(500).json({error: err.message});

            res.status(201).json({
                id:this.lastID,
                text,
                userId
            });
        }
    );

};

exports.deleteNote =(req,res)=>{
    const id = req.params.id;

    db.run("DELETE FROM notes WHERE id = ?",[id], function(err){
        if(err) return res.status(500).json({error: err.message});

        res.json({
            message:"Deleted"
        });
    });
};