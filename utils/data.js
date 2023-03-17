const { get } = require("../models/Reaction");

const usernames = [
  "Alfredo",
  "David",
  "Scott",
  "Master",
  "Sarah",
  "Halley",
  "Mark",
];

const thoughts = [
  "Decision Trackers are awesome",
  "Find My Phone is a useful app",
  "Learn Piano is not very good for learning Piano",
  "Starbase Defender is a great game, I love it",
  "Tower Defense is okay",
  "Monopoly Money is better than real money IMO",
  "Movie trailers are just the best parts of a movie",
  "Hello world, this is a comment",
  "Social media is a big waste of time",
  "Notes is my most used app",
  "Messages is open on my computer 24/7",
  "Email is open on my computer",
  "Compass is never opened",
  "Firefox is great for privacy",
];

const comments = [
  "I disagree!",
  "I tried it, all good",
  "This was awesome",
  "Thank you for the great thought",
  "Please check out my response",
  "Like and subscribe to my channel please",
  "I totally agree",
  "I think it's useless",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsers = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: `${usernames[i]}`,
      email: `user_${usernames[i]}@hmail.com`.toLowerCase(),
      thoughts: [],
      friends: [],
    });
  }
  return results;
};

// Function to generate random Thoughts that we can add to the database. Includes thought's comments .
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomArrItem(usernames),
      createdAt: new Date(),
      reactions: [...getThoughtComments(2)],
    });
  }
  return results;
};

// Create the comments that will be added to each thought
const getThoughtComments = (int) => {
  if (int === 1) {
    return getRandomArrItem(comments);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(comments),
      username: getRandomArrItem(usernames),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsers, getRandomThoughts };
