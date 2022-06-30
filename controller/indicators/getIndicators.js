const Indicators = require('../../model/indicators');
const Projects = require('../../model/project-infos');

module.exports = async (req, res)=>{
    try {
        let IndicatorCode = req.body.indicator_code;
        const getAllIndicators = await Indicators.findAll({
            where: {
                is_deleted: false
            }
        })
        if(getAllIndicators){
            return res.status(200).json({
                data: getAllIndicators
            })
        }
        
    } catch (e) {
        console.log(e);
    }
}