import express, { type Request, type Response } from 'express';
import './config/database';
import { Activity, Leaderboard, Team, User, Workout } from './models';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

const resources = [
  { name: 'users', getData: () => User.find({}).lean() },
  { name: 'teams', getData: () => Team.find({}).lean() },
  { name: 'activities', getData: () => Activity.find({}).lean() },
  { name: 'leaderboard', getData: () => Leaderboard.find({}).lean() },
  { name: 'workouts', getData: () => Workout.find({}).lean() },
];

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl });
});

resources.forEach((resource) => {
  app.get(`/api/${resource.name}/`, async (_request: Request, response: Response) => {
    const data = await resource.getData();

    response.json({
      resource: resource.name,
      url: `${baseUrl}/api/${resource.name}/`,
      count: data.length,
      data,
    });
  });
});

app.listen(port, () => {
  console.log(`OctoFit API listening at ${baseUrl}`);
});