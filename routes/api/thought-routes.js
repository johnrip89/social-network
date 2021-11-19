const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)  

// /api/thoughts/:userId  
router
  .route('/:userId')
  .post(addThought)
  .put(updateThought)

// /api/thoughts/:userId/:thoughtId
router
  .route('/:id')
  .get(getThoughtById)
  .put(addReaction)  
  .delete(removeThought)  

// /api/thoughts/:userId/:thoughtId/:reactionsId
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
