import ResourcePanel from './ResourcePanel.jsx'

// Codespaces API endpoint: -8000.app.github.dev/api/workouts

function Workouts() {
  return (
    <ResourcePanel
      title="Workouts"
      resource="workouts"
      description="Personalized workout suggestions for member goals."
      fields={[
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'recommendedForGoal', label: 'Recommended for' },
      ]}
    />
  )
}

export default Workouts