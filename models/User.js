const { Schema, model} = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    thoughts: [],
    friends: []
  },
  {
    toJSON: {
      getters: true
    }
  }
);

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
