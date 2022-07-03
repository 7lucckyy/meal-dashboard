const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');
const sequelize = require('sequelize');
const db = require('../../config/db')
module.exports = async (req, res)=>{
    try {
        let IndicatorCode = req.body.indicator_code;
        const getAllIndicators = await Indicators.findAll({
            attributes: [
             sequelize.fn('sum', sequelize.col('child_boys'),)],
            raw: true
        })
        if(getAllIndicators){
            return res.status(200).json({
                getAllIndicators
            })
        }
        
    } catch (e) {
        console.log(e);
    }
}