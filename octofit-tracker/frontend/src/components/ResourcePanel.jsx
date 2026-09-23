import { useEffect, useState } from 'react'
import { fetchResource } from '../services/api.js'

function formatValue(value) {
  if (value == null) {
    return 'Not set'
  }

  if (Array.isArray(value)) {
    return `${value.length} linked`
  }

  if (typeof value === 'object') {
    return value.name ?? value.title ?? value.email ?? value._id ?? 'Linked record'
  }

  return String(value)
}

function ResourcePanel({ title, resource, description, fields }) {
  const [items, setItems] = useState([])
  const [pagination, setPagination] = useState({ count: 0 })
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isCurrent = true

    async function loadResource() {
      setStatus('loading')
      setError('')

      try {
        const result = await fetchResource(resource)

        if (isCurrent) {
          setItems(result.items)
          setPagination(result.pagination)
          setStatus('ready')
        }
      } catch (resourceError) {
        if (isCurrent) {
          setError(resourceError.message)
          setStatus('error')
        }
      }
    }

    loadResource()

    return () => {
      isCurrent = false
    }
  }, [resource])

  return (
    <section className="resource-panel">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">{resource}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="resource-count">
          <strong>{pagination.count}</strong>
          <span>records</span>
        </div>
      </div>

      {pagination.page && (
        <p className="pagination-note">
          Page {pagination.page} of {pagination.pages ?? 'unknown'}
        </p>
      )}

      {status === 'loading' && <div className="state-message">Loading {resource}...</div>}
      {status === 'error' && <div className="state-message error">{error}</div>}
      {status === 'ready' && items.length === 0 && <div className="state-message">No records found.</div>}

      <div className="resource-grid">
        {items.map((item) => (
          <article className="resource-card" key={item._id ?? item.id ?? JSON.stringify(item)}>
            <h3>{item.name ?? item.title ?? item.type ?? `Rank ${item.rank}`}</h3>
            <dl>
              {fields.map((field) => (
                <div key={field.key}>
                  <dt>{field.label}</dt>
                  <dd>{formatValue(item[field.key])}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ResourcePanel