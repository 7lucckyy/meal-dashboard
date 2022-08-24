
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: "us-east-2",
});

const fileFilter = function(req, file, cb){
        if(file.minetype === 'image/png' || file.minetype === 'image/jpg' || file.minetype === 'image/peg' || file.minetype === 'application/pdf' || file.minetype === 'application/docx'){
            cb(null, true)
        }else{
            cb(null, false, "Invalid File format Upload Image")
        }
};

const fileUpload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = fileUpload;

