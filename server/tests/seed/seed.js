const {ObjectID} = require('mongodb');
const{Todo} = require('./../../models/todo');
const{User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
  }, {
    text: 'Second test todo',
    _id: new ObjectID(),
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const users = [{
  _id: userOneId,
  email: 'userOne@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
},{
  _id: userTwoId,
  email: 'userTwo@example.com',
  password: 'userTwoPass',
  tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  })
  .then(() => done())
  .catch((e) => done(e));
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]) // Wait for both promises to finish.
  }).then(() => done());
};

module.exports = {populateTodos, todos, users, populateUsers};
