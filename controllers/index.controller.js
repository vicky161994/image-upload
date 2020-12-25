const Image = require('../models/index');
class IndexController {
  home(req, res) {
    res.render('index');
  }

  saveImage(req, res) {
    try {
      const imageData = new Image({
        imageName: req.file.filename
      })
      imageData.save();
      return res.status(201).json({
        message: 'File uploded successfully'
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Something went wrong, Please try again!'
      });
    }
  }
}

module.exports = IndexController;
