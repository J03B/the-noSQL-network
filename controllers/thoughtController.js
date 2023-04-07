const { User, Thought, reactionSchema } = require('../models');

module.exports = {
  // API: /api/thoughts
  // GET to get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/thoughts/:thoughtId
  // GET to get a single thought by its _id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId})
    .select('-__v')
    .then((thought) => {
      if (!thought) {
        res.status(400).json( { message: 'No Thought with that ID' } )
      } else {
        res.json(thought);
      }
    })
    .catch((err) => res.status(500).json(err));
  },

  // API: /api/thoughts/:userId
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
        res.json( { thought: thought, message: 'Thought added to User' } );
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // API: /api/thoughts/:thoughtId
  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No Thought with that ID' });
        } else {
          res.json(thought);
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/thoughts/:thoughtId
  // DELETE to remove a thought by its _id
  deleteThought(req, res) {
    Thought.findOneAndDelete( { _id: req.params.thoughtId } )
      .then((thought) => {
        if (!thought) {
          res.status(404).json( { message: 'No Thought with that ID' } );
        } else {
          User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          );
        }
      })
      .then(() => res.json({ message: 'Thought deleted and removed from User' }))
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/thoughts/:thoughtId/reactions
  // POST to create a reaction stored in a single thought's reactions array field
  createThought(req, res) {
    reactionSchema.create(req.body)
      .then((reaction) => {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: reaction } },
          { new: true }
        )
        .then((updatedThought) => {
          res.json({ updatedThought });
        })
      })
      .catch((err) => res.status(500).json(err));
  },

  // API: /api/thoughts/:thoughtId/reactions/:reactionId
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'Thought or Reaction ID not found' });
        } else {
          res.json(thought);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};
