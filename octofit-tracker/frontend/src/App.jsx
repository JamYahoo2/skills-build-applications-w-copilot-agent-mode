import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl, isUsingCodespacesApi } from './services/api.js'
import './App.css'

const sections = [
  { path: '/api/users', label: 'Users' },
  { path: '/api/teams', label: 'Teams' },
  { path: '/api/activities', label: 'Activities' },
  { path: '/api/leaderboard', label: 'Leaderboard' },
  { path: '/api/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Team fitness operations</h1>
          <p className="lead">
            Browse the live data tier for members, teams, activity logs, rankings, and workout suggestions.
          </p>
        </div>
        <div className="api-status" aria-label="API connection details">
          <span>{isUsingCodespacesApi ? 'Codespaces API' : 'Local API'}</span>
          <code>{apiBaseUrl}</code>
        </div>
      </header>

      <nav className="section-tabs" aria-label="OctoFit sections">
        {sections.map((section) => (
          <NavLink key={section.path} to={section.path} className="section-tab">
            {section.label}
          </NavLink>
        ))}
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/api/users" replace />} />
          <Route path="/api/users" element={<Users />} />
          <Route path="/api/teams" element={<Teams />} />
          <Route path="/api/activities" element={<Activities />} />
          <Route path="/api/leaderboard" element={<Leaderboard />} />
          <Route path="/api/workouts" element={<Workouts />} />
          <Route path="/users" element={<Navigate to="/api/users" replace />} />
          <Route path="/teams" element={<Navigate to="/api/teams" replace />} />
          <Route path="/activities" element={<Navigate to="/api/activities" replace />} />
          <Route path="/leaderboard" element={<Navigate to="/api/leaderboard" replace />} />
          <Route path="/workouts" element={<Navigate to="/api/workouts" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
