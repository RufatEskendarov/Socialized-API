const connection = require("../config/comnnection");
const { User, Thought } = require("../models");
const { getRandomUsers, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = await getRandomUsers(7);
  const thoughts = await getRandomThoughts(7);

  await Thought.collection.insertMany(thoughts);
  await User.collection.insertMany(users);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  // console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
