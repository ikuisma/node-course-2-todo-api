const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// //Remove all.
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findOneAndRemove({_id: '59182aee7a8eb664aa5e5eb0'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('59182aee7a8eb664aa5e5eb0').then((todo) => {
//   console.log(todo);
// });
