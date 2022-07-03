
const { v4: uuidv4 } = require('uuid');
const db = require('../../config/db')
const multer = require('multer');
const validator = require('validator');
const Toolkits = require('../../model/toolkits');
const fileUpload = require('../../Middleware/uploadFile');

module.exports = async (req, res)=>{
    try {
        let name = req.body.fd.Name;
        let documentName = req.files.filename[0];

            if(validator.isEmpty(name)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Name is Required",
                    Description: "Name must be fill cant be blank"
                })
            }
            if(validator.isNumeric(name)){
                return res.status(400).json({
                    Success: false,
                    Message: "Name cannot be numbers"
                })
            }
            
            try {
                let ToolID = uuidv4();
            
                const Transaction = await db.transaction()
                try {
                    const createToolkit = await Toolkits.create({
                        id: ToolID,
                        name: name,
                        src: documentName.path,
                        is_deleted: 0,
                    })
                    
                    {
                        transaction:Transaction
                    }
        
                    await Transaction.commit();
                        return res.status(201).json({
                        msg: "Created Successfully"
                    })    
                } catch (e) {
                    console.log(e);
                    await Transaction.rollback()             
                    return res.status(500).json({
                        Success: false, 
                        message: "Internal Server error",
                        description: "Something went wrong"
                    })  
                }
            } catch (e) {

               console.log(e);
               return res.status(500).json({
                Success: false, 
                message: "Internal Server error",
                description: "Something went wrong"
            })
            }
    } catch (e) {
        console.log(e);
       return res.status(400).json({
           Success: false,
           message: "File name and type are required"
       }) 
    }
}
