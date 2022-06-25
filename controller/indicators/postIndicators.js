
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const Indicators = require('../../model/indicators');



module.exports = async (req, res)=>{
    try {

        let { code, name, target, child_boys, child_girls, adole_boys, adole_girls, 
            adult_boys, adult_girls, male, female, beneficiary_status, 
            total_pwd, project_code} = req.body;

            if(validator.isEmpty(project_code)){
                return res.status(400).json({
                    Success: false,
                    Message: "Opps Project Code cant be blank"
                })
            }
            

            if(validator.isEmpty(code)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Indicator code fill is required",
                    Description: "Indicator code cannot be blank "
                })
            }
            if(validator.isEmpty(name)){
                return res.status(400).json({
                    Success: false,
                    Message: "name address can not be blank",
                    Description: "name is required"
                })  
              }
            
            if(validator.isNumeric(target)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "child_boys must be number not string",
                    Description: "Kindly put your child_boys in numbers"
                })
            }
            if(validator.isNumeric(child_boys)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "child_boys must be number not string",
                    Description: "Kindly put your child_boys in numbers"
                })
            }
            if(validator.isEmpty(child_girls)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops child_girls is required",
                    
                    Description: "child_girls cannot be blank"
                })
            }
            if(validator.isNumeric(adole_boys)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "adole_boys must be number not string",
                    Description: "Kindly put your adole_boys in numbers"
                })
            }
            if(validator.isEmpty(adole_girls)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops adole_girls is required",
                    
                    Description: "adole_girls cannot be blank"
                })
            }
            if(validator.isNumeric(adult_boys)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "adult_boys must be number not string",
                    Description: "Kindly put your adult_boys in numbers"
                })
            }
            if(validator.isEmpty(adult_girls)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops adult_girls is required",
                    
                    Description: "adult_girls cannot be blank"
                })
            }
            if(validator.isNumeric(male)==false){
                return res.status(400).json({
                    Success: false, 
                    Message: "male must be number not string",
                    Description: "Kindly put your male in numbers"
                })
            }
            if(validator.isEmpty(female)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops female is required",
                    
                    Description: "female cannot be blank"
                })
            }
            if(validator.isNumeric(pwd_boys)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "pwd_boys must be number not string",
                    Description: "Kindly put your pwd_boys in numbers"
                })
            }
            if(validator.isEmpty(pwd_girls)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops pwd_girls is required",
                    
                    Description: "pwd_girls cannot be blank"
                })
            }
            if(validator.isNumeric(pwd_male)==false){
                return res.status(400).json({
                    Success: false,
                    Message: "pwd_male must be number not string",
                    Description: "Kindly put your pwd_male in numbers"
                })
            }
            if(validator.isEmpty(pwd_female)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops pwd_female is required",  
                    Description: "pwd_female cannot be blank"
                })
            }

            if(validator.isEmpty(beneficiary_status)){
                return res.status(400).json({
                    Successs: false,
                    Message: "beneficiary status is required",
                    Description: "Must be Aplha-numeric"
                })
            }

            const AuthencateProject = await Indicators.findOne({
                where:{
                    p_code: project_code,
                    is_deleted: false,
                }
            })

            if(!AuthencateProject){
                return res.status(400).json({
                    Success: false,
                    Message: "Invalid Project Code",
                    Description: "Project Code Must be provided"
                })
            }

            const projectID = AuthencateProject.id;
            
        try {
            project_id = uuidv4();
            const createIndicators = await Indicators.create({
                id: uuidv4(),
                
                code: code,
                name: name,
                target: target,
                p_id : projectID,
                child_boys: child_boys,
                child_girls:    child_girls,
                adole_boys: adole_boys,
                adole_girls:    adole_girls,
                adult_boys: adult_boys,
                adult_girls:    adult_girls,
                male: male,
                female:    female,
                project_code: project_code,
                total_pwd: total_pwd,
                beneficiary_status:    0,
                is_deleted: 0,
              

            })
            
            return res.status(201).json({
            msg: "Indicator Created Successfully"
            })
        } catch (e) {
           
            console.log(e);
            return res.status(500).json({
                msg: "Could not complete operation"
            });    
        }
        
    } catch (e) {
        console.log(e);
        // return res.status(400).json({
            
        //     msg: "The Indicator information must be filled"
        // });
    }
}
