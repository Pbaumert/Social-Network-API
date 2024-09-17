const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

const seedDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create users first
  const users = await User.insertMany([
    {
      username: 'spaghetti_monster',
      email: 'spaghetti@pasta.com',
    },
    {
      username: 'darth_vapour',
      email: 'vape@galaxyfarfaraway.com',
    },
    {
      username: 'nacho_king',
      email: 'nachos@snacktime.com',
    },
    {
      username: 'yoda_speak',
      email: 'wise@force.com',
    }
  ]);

  // Create thoughts associated with userIds
  const thoughts = await Thought.insertMany([
    {
      thoughtText: "I'm pretty sure my fridge is running... time to catch it.",
      username: 'spaghetti_monster',
      userId: users[0]._id, // Assign userId
      reactions: [
        {
          reactionBody: "You'd better run faster!",
          username: 'darth_vapour',
        },
      ]
    },
    {
      thoughtText: "Why don't skeletons fight each other? They don’t have the guts!",
      username: 'nacho_king',
      userId: users[2]._id, 
      reactions: [
        {
          reactionBody: "Bones to pick, they have not.",
          username: 'yoda_speak',
        }
      ]
    },
    {
      thoughtText: "I tried to eat a clock... it was time-consuming.",
      username: 'darth_vapour',
      userId: users[1]._id, 
      reactions: [
        {
          reactionBody: "Tick-tock, tick-tock... did you eat the minutes too?",
          username: 'spaghetti_monster',
        }
      ]
    },
    {
      thoughtText: "Do or do not... there is no try, but also no coffee.",
      username: 'yoda_speak',
      userId: users[3]._id, 
      reactions: [
        {
          reactionBody: "I’m going to brew it now.",
          username: 'nacho_king',
        }
      ]
    }
  ]);

  console.log('Database seeded with data!');
  mongoose.connection.close();
};

seedDatabase();

