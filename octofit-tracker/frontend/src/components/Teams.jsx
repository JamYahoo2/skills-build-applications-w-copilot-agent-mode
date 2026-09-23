import ResourcePanel from './ResourcePanel.jsx'

// Codespaces API endpoint: -8000.app.github.dev/api/teams

function Teams() {
  return (
    <ResourcePanel
      title="Teams"
      resource="teams"
      description="Groups competing toward shared weekly activity goals."
      fields={[
        { key: 'mascot', label: 'Mascot' },
        { key: 'weeklyGoalMinutes', label: 'Weekly goal' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}

export default Teams