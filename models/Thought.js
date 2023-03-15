const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
  .get(() => this.reactions)
  .set((arr) => {
    const arrLength = arr.length;
    this.set(arrLength);
  });

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
