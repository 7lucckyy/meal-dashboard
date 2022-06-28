const db = require('../../config/db');
const Users = require('../../model/Users');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const validator = require('validator')



module.exports = async (req, res)=>{
    try {
        let { name, email, password} = req.body;


            if(validator.isEmpty(name)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Name fill is required",
                    Description: "Name cannot be blank "
                })
            }
            if(validator.isNumeric(name)){
                return res.status(400).json({
                    Success: false,
                    Message: "name address can not be numbers",
                    Description: "name address cannot be "
                })  
              }
            if(validator.isEmpty(email)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Email Address is required",
                    
                    Description: "Email fill cannot be blank"
                })
            }
            
            if(validator.isEmail(email)==false){
                return res.status(400).json({
                    Successs: false,
                    Message: "Invalid email fomart",
                    Description: "Email address e.g exmaple@email.com"
                })
            }
            
            if(validator.isEmpty(password)){
                return res.status(400).json({
                    Success: false,
                    Message: "Password is required",
                    Description: "You must provide password"
                })
            }
            if(password.length < 8){
                return res.status(400).json({
                    Success: false,
                    Message: "Password can not be less 8 characters",
                    Description: "Password length is to short"
                })
            }
            let Haspassword = await bcrypt.hash(password, 10);
            
        try {
            
            const registerUser = await Users.create({
                id: uuidv4(),
                name: name,
                email: email,
                is_admin: is_admin,
                password: Haspassword,
                is_deleted: 0
            })
            
            return res.status(201).json({
            msg: "Created Successfully"
            })
        } catch (e) {
            
            console.log(e);
            return res.status(500).json({
                msg: "Could not complete operation"
            });    
        }
        
    } catch (e) {
        return res.status(400).json({
            msg: "The following request bodies are required: name, email, role, password"
        });
    }
}
