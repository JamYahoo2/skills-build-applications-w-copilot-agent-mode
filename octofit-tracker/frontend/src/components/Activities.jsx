import ResourcePanel from './ResourcePanel.jsx'

function Activities() {
  return (
    <ResourcePanel
      title="Activities"
      resource="activities"
      description="Logged workouts and movement sessions from members."
      fields={[
        { key: 'type', label: 'Type' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'completedAt', label: 'Completed' },
      ]}
    />
  )
}

export default Activities