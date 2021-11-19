const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,      
    },    
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true      
    },
    reactions: [reactionSchema]    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reations.reduce    
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Pizza;
