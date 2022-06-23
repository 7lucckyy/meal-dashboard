const sequelize = require('sequelize');
const db = require('../config/db');

const Indicators = db.define('indicator', {
    id: {
        type: sequelize.UUID,
        required: true,
        primaryKey: true
    },
    code:{
        type: sequelize.STRING,
        required: true,
        allowNull: false
    },
    name:{
        type: sequelize.STRING,
        allowNull: false

    },
    target:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    child_boys:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    child_girls:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    adole_boys:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    adole_girls:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    adult_boys:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    adult_girls:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    male:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    female:{
        type: sequelize.INTEGER,
        allowNull: false

    },
    beneficiary_status:{
        type: sequelize.INTEGER,
        allowNull: true
    },
    total_pwd:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    is_deleted:{
        type: sequelize.BOOLEAN
    },
    p_id:{
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = Indicators;
