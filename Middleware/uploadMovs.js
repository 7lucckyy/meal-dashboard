const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/movs');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + '' + file.originalname)
    },
    fileFilter: function(req, file, cb){
        if(file.minetype === 'image/png' || file.minetype === 'image/jpg' || file.minetype === 'image/peg' || file.minetype === 'application/pdf' || file.minetype === 'application/doc'){
            cb(null, true)
        }else{
            cb(null, false, "Invalid File format Upload Image")
        }
    }
})



const fileUpload = multer({
    storage: storage,
    limits: {
       fileSize: 1024 * 1024 * 5 
    }
    
}).fields([{name: 'filename'}, {name: 'image'}])

module.exports = fileUpload;

