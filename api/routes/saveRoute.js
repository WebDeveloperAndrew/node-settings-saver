//Routes request to controller
module.exports = function(app) {
  var saver = require('../controllers/saveController');
  app.route('/save').post(saver.save);
}