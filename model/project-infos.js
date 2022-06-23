const sequelize = require('sequelize');
const db = require('../config/db');

const Projects = db.define('project_info', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        required: true
    },
    title:{
        type: sequelize.STRING,
        allowNull: false,
        required: true
    
    },
    duration: {
        type: sequelize.STRING,
        allowNull: false,
        require: true
    },
    locations:{
        type: sequelize.STRING,
        required: true
    },
    donor:{
        type: sequelize.STRING,
        required: true
    },
    is_deleted:{
        type: sequelize.BOOLEAN,
        required: true
    }
})

module.exports = Projects;