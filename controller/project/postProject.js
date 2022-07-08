

const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const Projects = require('../../model/project-infos');



module.exports = async (req, res)=>{
    try {
        let { title, duration, locations, donor, project_code, thematic} = req.body;


            if(validator.isEmpty(title)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Project title fill is required",
                    Description: "Project title cannot be blank "
                })
            }
            if(validator.isNumeric(title)){
                return res.status(400).json({
                    Success: false,
                    Message: "Title address can not be numbers",
                    Description: "title must be alpha-numeric"
                })  
              }
            if(validator.isEmpty(duration)){
                return res.status(400).json({
                    Success: false,
                    Message: "Oops Duration is required",
                    
                    Description: "Duration cannot be blank"
                })
            }
            
            if(validator.isEmpty(locations)){
                return res.status(400).json({
                    Successs: false,
                    Message: "project location is required",
                    Description: "Must be Aplha-numeric"
                })
            }
            
            if(validator.isEmpty(donor)){
                return res.status(400).json({
                    Success: false,
                    Message: "Donor or Source of funding is required",
                    Description: "You must provide Donor"
                })
            }
            if(validator.isEmpty(thematic)){
                return res.status(400).json({
                    Success: false,
                    Message: "Donor or Source of funding is required",
                    Description: "You must provide Donor"
                })
            }

        try {
            
            const createProjects = await Projects.create({
                id: uuidv4(),
                title: title,
                duration: duration,
                locations: locations,
                donor:    donor,
                p_code: project_code, 
                thematic: thematic,
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
            msg: "The project information must be filled"
        });
    }
}
