import ResourcePanel from './ResourcePanel.jsx'

function Leaderboard() {
  return (
    <ResourcePanel
      title="Leaderboard"
      resource="leaderboard"
      description="Current competitive standings across OctoFit teams."
      fields={[
        { key: 'rank', label: 'Rank' },
        { key: 'points', label: 'Points' },
        { key: 'activeMinutes', label: 'Active minutes' },
        { key: 'team', label: 'Team' },
      ]}
    />
  )
}

export default Leaderboard