var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Make sure mongoose uses ES6 promises.
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
