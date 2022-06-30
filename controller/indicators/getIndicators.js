const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');

module.exports = async (req, res)=>{
    try {
        let IndicatorCode = req.body.indicator_code;
        const getAllIndicators = await Indicators.findAll({
            where: {
                is_deleted: 0
            }
        })
        return console.log({getAllIndicators});
        
    } catch (e) {
        console.log(e);
    }
}