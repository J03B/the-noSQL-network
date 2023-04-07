// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const friendCount = async () => 
  User.aggregate([
    { 
      $project: {
        friendCount: { $size: '$friends' },
      },
    },
  ]);

module.exports = {
  // API: /api/users
  // GET all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users, 
          friendCount: await friendCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // API: /api/users/:userId
  // GET a single user by its _id and populated thought and friend data
  getSingleUser(req, res) {
    User.findOne( { _id: req.params.userId } )
      .select('-__v')
      .then(async (user) => {
        if (!user) {
          res.status(404).json( { message: 'No User found with that ID' } );
        } else {
          res.json( { user, friendCount: await friendCount() } );
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // API: /api/users
  // POST a new user:
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/users/:userId
  // PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then(async (user) => {
        if (!user) {
          res.status(404).json( { message: 'No User found with that ID' } );
        } else {
          res.json( { user, friendCount: await friendCount() } );
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/users/:userId
  // DELETE to remove user by its _id (and associated thoughts)
  deleteUser(req, res) {
    User.findOneAndDelete( { _id: req.params.userId } )
      .then(async (user) => {
        if (!user) {
          res.status(404).json( { message: 'No User found with that ID' } );
        } else {
          Thought.deleteMany( { _id: { $in: user.thoughts } } )
          .then( res.json( { message: 'User and thoughts deleted!' } ) );
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/users/:userId/friends/:friendId
  // POST to add a new friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate( 
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then(async (user) => {
        if (!user) {
          res.status(404).json( { message: 'No User found with that ID' } );
        } else {
          res.json( { user, friendCount: await friendCount() } );
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/users/:userId/friends/:friendId
  // DELETE to remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate( 
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(async (user) => {
        if (!user) {
          res.status(404).json( { message: 'No User found with that ID' } );
        } else {
          res.json( { user, friendCount: await friendCount() } );
        }
      })
      .catch((err) => res.status(500).json(err));
  }
};