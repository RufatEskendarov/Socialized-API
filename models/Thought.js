const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T")[0];
      },
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  .get(function () {
    return this.reactions;
  })
  .set(function (arr) {
    const arrLength = arr.length;
    this.set(arrLength);
  });

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
