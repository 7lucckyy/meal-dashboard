const Projects = require('../../model/project-infos');


module.exports = async (req, res)=>{
    try {
        const getAllProjectDetails = await Projects.findAll({
            where: {
                is_deleted: false
            }
            
        })
        if(!getAllProjectDetails){
            return res.status(400).json({
                Success: false,
                Message: "No project found!",
            })
        }
        if(getAllProjectDetails){
            return res.status(200).json({
                Success: true,
                Message: "Data Retrived Successfully",
                data: getAllProjectDetails
            })
        }

       
        
        
    } catch (e) {
        console.log(e);
    }
    
}