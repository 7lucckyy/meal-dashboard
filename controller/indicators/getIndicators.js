const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');

module.exports = async (req, res)=>{
    try {
        let IndicatorCode = req.body.indicator_code;
        const getAllIndicators = Indicators.findAll({
            where: {
                
            }
        })
        
    } catch (e) {
        
    }
}