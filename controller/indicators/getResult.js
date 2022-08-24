
const Projects = require('../../model/project-infos');
const sequelize = require('sequelize');
const db = require('../../config/db');
const Indicators = require('../../model/indicators');


module.exports = async (req, res)=>{
    try {
        
        let pID = req.params.id
        
        const getOneproject = await Projects.findOne({
            where: {
                is_deleted: false,
                id: pID

            }
        })
        let projectCode = getOneproject.p_code
        const getResults = await Indicators.findAll({
            where:{
                p_code: projectCode,
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
        const dataResult = getResults.map((item)=>{
        data.boy += item.adole_boys;
        data.girl += item.adole_girls;
        data.child_boy += item.child_boys;
        data.child_girl += item.child_girls;
        data.child_boy += item.child_boys;
        data.child_girl += item.child_boys;
        data.adult_boy += item.adult_boys;
        data.adult_girl += item.adult_girls;
        data.male += item.male;
        data.female += item.female;
        data.pwds += item.total_pwd;
        data.target += item.target;
        data.reached += item.adole_boys + item.adole_girls + item.child_boys + item.child_girls + item.adult_boys + item.adult_girls + item.male + item.female
        
       })
       return res.status(200).json({
        message: "Retrieved Successfully",
        data: data
       })
     
    } catch (e) {
        console.log(e);
    }
}