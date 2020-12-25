const express = require('express');
const router = express.Router();
const multer = require('multer');
const IndexController = require("../controllers/index.controller");
const indexController = new IndexController();
const Image = require('../models/index');
router.get("/", indexController.home);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/upload-image', upload.single('photo'), indexController.saveImage);
module.exports = router;
