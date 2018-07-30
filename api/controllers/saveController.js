//Recieves JSON and saves it as a file
exports.save = function (req, res) {
  if (process.env.LOGGING) {
    console.log(req.body);
  }
  var fs = require('fs');
  if (!fs.existsSync('data/variables.json')) {
    fs.mkdirSync('data');
  }
  fs.writeFile('data/variables.json', JSON.stringify(req.body),
    {
      encoding: 'utf8',
      flag: 'w+'
    }, function (e) {
      if (e) {
        console.error(e);
      }
      else {
        res.sendStatus(200);
      }
    });
};