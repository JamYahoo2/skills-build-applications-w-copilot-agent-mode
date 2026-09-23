import ResourcePanel from './ResourcePanel.jsx'

// Codespaces API endpoint: -8000.app.github.dev/api/users

function Users() {
  return (
    <ResourcePanel
      title="Users"
      resource="users"
      description="Member profiles and weekly fitness targets."
      fields={[
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'fitnessGoal', label: 'Goal' },
        { key: 'weeklyTargetMinutes', label: 'Weekly target' },
      ]}
    />
  )
}

export default Users