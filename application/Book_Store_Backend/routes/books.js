const router=require("express").Router()
const connection= require("../DataBase/connection")
const admin =require("../MiddleWare/Admin")
const authorized =require("../MiddleWare/authorize")
const { body, validationResult } = require("express-validator");
const upload = require("../MiddleWare/uploadImage");
const util = require("util"); 
const fs = require("fs"); // file module


// Add book to dataBase
router.post("",admin,upload.single("image_url"),
    body("name").isString().withMessage("please enter a valid book name").isLength({ min: 5 }),
    body("author_name").isString().withMessage("please enter a valid author_name ").isLength({ min: 5 }),
    body("price").isFloat().withMessage("please entera a valid price"),
    async (req, res) => {
        try {
            // 1-validation using express 
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            // 2- validate the image
            if (!req.file) {
                return res.status(400).json({
                errors: [{ Message: "Image is Required"},],
                });
            }
            // 3- prepare book object
            const bookData = {
            name: req.body.name,
            author_name: req.body.author_name,
            price: req.body.price,
            image_url: req.file.filename,
            };
            // 4 - insert into data base
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into books set ? ", bookData);
            res.status(200).json({Message: "book added successfully!"});
        } catch (err) {
            res.status(500).json(err);
            }
    }
);
// update book in dataBase
router.put("/:id",admin,upload.single("image_url"),
    body("name").isString().withMessage("please enter a valid book name").isLength({ min: 5 }),
    body("author_name").isString().withMessage("please enter a valid author_name ").isLength({ min: 5 }),
    body("price").isFloat().withMessage("please entera a valid price"),
    async (req, res) => {
        try {
            // 1-validation using express 
            const query = util.promisify(connection.query).bind(connection);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            //2- check if book exists or not
            const bookDataInDataBase=await query("select * from books where id = ?",[req.params.id])
            if(!bookDataInDataBase[0]){
                res.status(404).json({Message:"book not found!"})
            }
            // 3- prepare book object
            const bookData = {
                name: req.body.name,
                author_name: req.body.author_name,
                price: req.body.price,
                };
            if(req.file){
                bookData.image_url= req.file.filename;
                //delete old image
                fs.unlinkSync("./upload/"+bookDataInDataBase[0].image_url)
            }
            // 4- update book data in dataBase
            await query("update books set ? where id = ?",[bookData,bookDataInDataBase[0].id])
            res.status(200).json({Message:"book updated successfully"})

        } catch (err) {
            res.status(500).json(err);
            }
    }
);

// delete book to dataBase
router.delete("",admin,(req,res)=>{
    res.json("book deleted")
})

// list books 
router.get("",authorized,(req,res)=>{
    res.json("All books")
})

// search for a book 
router.delete("",authorized,(req,res)=>{
    res.json("hi")
})


module.exports=router;