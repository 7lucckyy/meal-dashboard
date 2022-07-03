const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');
const sequelize = require('sequelize');
const db = require('../../config/db')

module.exports = async (req, res)=>{
    try {
        let IndicatorCode = req.body.indicator_code;
        // const getAllIndicators = await Indicators.findAll({
        //     attributes: [
        //      sequelize.fn('sum', sequelize.col('child_boys'),)],
        //      raw: true
        // })
        const getAllIndicatorsSum = await db.query('SELECT sum(child_boys) AS total_child_boys, sum(child_girls) AS total_child_girls FROM indicators', {
            type: sequelize.QueryTypes.SELECT
        })
        console.log(getAllIndicatorsSum);
        // if(getAllIndicators){
        //     return res.status(200).json({
        //        data: getAllIndicators
        //     })
        // }
        
    } catch (e) {
        console.log(e);
    }
}