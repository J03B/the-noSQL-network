const router = require('express').Router();
const {
  getUsers,
  addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers)// Add other requests like .post(createUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').get(addFriend) // Add other for DELETE friend request like .delete(deleteFriend);

module.exports = router;
