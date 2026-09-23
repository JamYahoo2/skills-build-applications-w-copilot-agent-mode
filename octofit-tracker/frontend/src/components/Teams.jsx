import ResourcePanel from './ResourcePanel.jsx'

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