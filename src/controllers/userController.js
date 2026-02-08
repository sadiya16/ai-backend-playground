const db = require("../db/database");
const bcrypt = require("bcrypt");

exports.signup = async (req,res)=>{
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);
    db.run(
        "INSERT INTO users(email,password) VALUES (?,?)",
        [email,hashedPassword],
        function(err){
            if(err) return res.status(400).json({error: "User already exist"});

            res.status(201).json({
                id: this.lastID,
                email,
            });
        });
}

exports.login = (req,res)=>{
    const { email, password } = req.body;

    db.get(
        "Select * from users where email = ?",
        [email],
        async(err,user)=>{
            if(err || !user) 
                return res.status(400).json({error:"User not found"});

            const match = await bcrypt.compare(password,user.password);

            if(!match)
                return res.status(401).json({error:"Wrong Password"});

            return res.json({ message: "Login successful", userId: user.id });
        }
    )
}

