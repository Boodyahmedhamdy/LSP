const router=require("express").Router()
const connection= require("../DataBase/connection")
const { body, validationResult } = require('express-validator');
const util=require("util")
const bcrypt= require("bcrypt");
const crypto = require("crypto");


// sign up
router.post("/signUp",
body('email').isEmail().withMessage("invalide email !"),
body('name').isString().isLength({ min: 5 ,max: 20 }).withMessage("invalide name !"),
body('password').isLength({ min: 5 , max: 10}).withMessage("invalide password !"),
async (req,res)=>{
    try{
        // 1-validate using express 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        // 2- check if email exist in dataBase
        const query =util.promisify(connection.query).bind(connection);
        const checkEmailExists = await query("select * from users where email = ?",[req.body.email]);
        if(checkEmailExists.length > 0){
            res.status(400).json({
                errors:[{messsage: "email already exists"}]  
            })
        }
        // 3- prepare object to save in dataBase
        const userData ={
            name : req.body.name,
            email : req.body.email,
            password : await bcrypt.hash(req.body.password, 10),
            role_id : req.body.role_id,
            token: crypto.randomBytes(16).toString("hex"),
        }
        // 4- insert into data base
        await query("insert into users set ?",userData)
        res.status(200).json(userData)
    }catch(err){
        res.status(500).json({err:err});
    }
})
// login 
router.post("/login",
body('email').isEmail().withMessage("invalide email !"),
body('password').isLength({ min: 5 , max: 10}).withMessage("invalide password !"),
async (req,res)=>{
    try{
        // 1-validate using express validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        // 2- check if email exist in dataBase
        const query =util.promisify(connection.query).bind(connection);
        const userDataInDataBase = await query("select * from users where email = ?",[req.body.email]);
        if(userDataInDataBase.length == 0){
            res.status(400).json({
                errors:[{messsage: "email or password are in valide!"}]  
            });
                
        }
        // 3- COMPARE HASHED PASSWORD
        const checkPassword = await bcrypt.compare(
        req.body.password,
        userDataInDataBase[0].password
        );
        if (checkPassword) {
            delete userDataInDataBase[0].password;
            res.status(200).json(userDataInDataBase[0]);
        } else {
            res.status(400).json({
                errors:[{messsage: "email or password are in valide!"}]  
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err:err});
    }
})



module.exports=router;