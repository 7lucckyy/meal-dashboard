const Indicators = require('../../model/indicators');

module.exports = async (req, res)=>{
    try {
        const viewAllIndicators = await Indicators.findAll({
            where: {
                is_deleted: false,

            }
        })
        if(!viewAllIndicators){
            return res.status(400).json({
                Success: false,
                Message: "Kindly check your Indicators",
                description: "Indicators not found"
            })
        }
        const getTotalReach = await Indicators.findAll({
            where: {
                is_deleted: false,
            }
        })
        if(viewAllIndicators){
            return res.status(200).json({
                Success: true,
                Message: "Indicators Retrieved Successfully",
                data: viewAllIndicators
            })
        }
    } catch (e) {
        console.log(e);
    }
}