const router = require('express').Router();
const {
  getThoughts,
  createReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts)// Include any other requests like .post(createThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)// Include to remove reaction by the reactionId value;

module.exports = router;
