const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Create empty array to hold the users and thoughts
  const users = [];
  const thoughts = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const username = getRandomName();
    const email = `${username.split(' ')[0]}.${username.split(' ')[1]}@example.com`;

    users.push({
      username,
      email
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding Users complete! 🌱');
  console.log('Upcoming feature to seed Thoughts and Reactions');
  console.log('Example Thought:', getRandomThought());
  console.log('Example Reaction:', getRandomReaction());
  process.exit(0);
});
