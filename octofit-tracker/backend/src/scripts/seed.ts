import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        role: 'Team Captain',
        fitnessGoal: 'Build endurance',
        weeklyTargetMinutes: 240,
      },
      {
        name: 'Jordan Smith',
        email: 'jordan.smith@example.com',
        role: 'Member',
        fitnessGoal: 'Improve strength',
        weeklyTargetMinutes: 180,
      },
      {
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        role: 'Member',
        fitnessGoal: 'Increase flexibility',
        weeklyTargetMinutes: 150,
      },
      {
        name: 'Diego Rivera',
        email: 'diego.rivera@example.com',
        role: 'Coach',
        fitnessGoal: 'Maintain performance',
        weeklyTargetMinutes: 210,
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Circuit Breakers',
        mascot: 'Lightning Bolt',
        members: [users[0]._id, users[1]._id],
        weeklyGoalMinutes: 420,
      },
      {
        name: 'Cardio Crew',
        mascot: 'Trail Runner',
        members: [users[2]._id, users[3]._id],
        weeklyGoalMinutes: 360,
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'Run',
        durationMinutes: 45,
        caloriesBurned: 430,
        completedAt: new Date('2026-09-20T13:30:00Z'),
      },
      {
        user: users[1]._id,
        type: 'Strength Training',
        durationMinutes: 55,
        caloriesBurned: 380,
        completedAt: new Date('2026-09-21T18:00:00Z'),
      },
      {
        user: users[2]._id,
        type: 'Yoga',
        durationMinutes: 40,
        caloriesBurned: 180,
        completedAt: new Date('2026-09-22T12:15:00Z'),
      },
      {
        user: users[3]._id,
        type: 'Cycling',
        durationMinutes: 60,
        caloriesBurned: 520,
        completedAt: new Date('2026-09-23T11:00:00Z'),
      },
    ]);

    await Leaderboard.insertMany([
      {
        user: users[3]._id,
        team: teams[1]._id,
        rank: 1,
        points: 1840,
        activeMinutes: 305,
      },
      {
        user: users[0]._id,
        team: teams[0]._id,
        rank: 2,
        points: 1710,
        activeMinutes: 285,
      },
      {
        user: users[1]._id,
        team: teams[0]._id,
        rank: 3,
        points: 1425,
        activeMinutes: 230,
      },
      {
        user: users[2]._id,
        team: teams[1]._id,
        rank: 4,
        points: 1190,
        activeMinutes: 195,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run Builder',
        focusArea: 'Cardio',
        difficulty: 'Intermediate',
        durationMinutes: 35,
        recommendedForGoal: 'Build endurance',
      },
      {
        title: 'Full-Body Strength Circuit',
        focusArea: 'Strength',
        difficulty: 'Intermediate',
        durationMinutes: 45,
        recommendedForGoal: 'Improve strength',
      },
      {
        title: 'Mobility Reset Flow',
        focusArea: 'Flexibility',
        difficulty: 'Beginner',
        durationMinutes: 25,
        recommendedForGoal: 'Increase flexibility',
      },
      {
        title: 'Performance Recovery Ride',
        focusArea: 'Recovery',
        difficulty: 'Beginner',
        durationMinutes: 30,
        recommendedForGoal: 'Maintain performance',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
