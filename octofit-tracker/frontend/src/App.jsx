import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl, isUsingCodespacesApi } from './services/api.js'
import './App.css'

const sections = [
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
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
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
