const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

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

  const thoughts = await Thought.insertMany([
    {
      thoughtText: "I'm pretty sure my fridge is running... time to catch it.",
      username: 'spaghetti_monster',
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
      reactions: [
        {
          reactionBody: "I’m going to brew it now.",
          username: 'nacho_king',
        }
      ]
    }
  ]);

  console.log('Database seeded with creative data!');
  mongoose.connection.close();
};

seedDatabase();
