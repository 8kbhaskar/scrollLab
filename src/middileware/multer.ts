

const multer = require("multer");
const _ = require('lodash');

// define disk storage strategy for multer
const storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log(".... upload path ",process.cwd() + "/src/upload")
    callback(null, process.cwd() + "/src/upload");
  },
  filename(req, file, callback) {
    const newFileName = (file.fieldname.replace(/\s/g, ''));
    const newOriginalName = (file.originalname.replace(/\s/g, ''));
    callback(null, `${newFileName}_${new Date().getTime()}_${newOriginalName}`);
  },
});

const upload = multer({ storage });

const singleFile = function (key) {
  if (key) {
    return upload.single(key);
  }
};

const multiFile = function (key) {
  return upload.array(key);
};

// Export modules
export {
  singleFile,
  multiFile,
  upload
};
