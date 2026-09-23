import ResourcePanel from './ResourcePanel.jsx'

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
//-8000.app.github.dev/api/users
export default Users