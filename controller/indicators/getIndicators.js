const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');
const sequelize = require('sequelize');
const db = require('../../config/db');


module.exports = async (req, res)=>{
    try {
        
        const getAllResults = await Indicators.findAll({
            where:{
                is_deleted: false
            }
        })
        
        let data = {
             boy : 0,
             girl : 0,
             child_boy : 0,
             child_girl : 0,
             adult_girl : 0,
             adult_boy : 0,
             male : 0,
             female : 0,
             pwds : 0,
             target: 0,
             reached: 0
             
        }
        const dataResult = getAllResults.map((item)=>{
            data.boy = parseFloat(data.boy) + parseFloat(item.adole_boys);
            data.girl = parseFloat(data.girl) + parseFloat(item.adole_girls);
            data.child_boy = parseFloat(data.child_boy) + parseFloat(item.child_boys);
            data.child_girl = parseFloat(data.child_girl) + parseFloat(item.child_girls);
            data.adult_boy = parseFloat(data.adult_boy) + parseFloat(item.adult_boys);
            data.adult_girl = parseFloat(data.adult_girl) + parseFloat(item.adult_girls);
            data.male = parseFloat(data.male) + parseFloat(item.male);
            data.female = parseFloat(data.female) + parseFloat(item.female);
            data.pwds = parseFloat(data.pwds) + parseFloat(item.total_pwd);
            data.target = parseFloat(data.target) + parseFloat(item.target);
            data.reached = parseFloat(data.reached) + parseFloat(item.adole_boys) + parseFloat(item.adole_girls) + parseFloat(item.child_boys) + parseFloat(item.child_girls) + parseFloat(item.adult_boys) + parseFloat(item.adult_girls) + parseFloat(item.male) + parseFloat(item.female) + parseFloat(item.total_pwd);
            
       
        
       })
       return res.status(200).json({
        message: "Retrieved Successfully",
        data: data
       })
     
    } catch (e) {
        console.log(e);
    }
}
