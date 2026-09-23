const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const isUsingCodespacesApi = Boolean(codespaceName)
export const apiBaseUrl = isUsingCodespacesApi
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

function extractItems(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.data)) {
    return payload.data
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  if (Array.isArray(payload?.items)) {
    return payload.items
  }

  if (Array.isArray(payload?.docs)) {
    return payload.docs
  }

  if (Array.isArray(payload?.records)) {
    return payload.records
  }

  return []
}

function extractPagination(payload, items) {
  if (Array.isArray(payload)) {
    return { count: items.length }
  }

  return {
    count: payload?.count ?? payload?.total ?? payload?.totalDocs ?? items.length,
    page: payload?.page,
    pages: payload?.pages ?? payload?.totalPages,
  }
}

export async function fetchResource(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`)

  if (!response.ok) {
    throw new Error(`Request failed for ${resource}: ${response.status}`)
  }

  const payload = await response.json()
  const items = extractItems(payload)

  return {
    items,
    pagination: extractPagination(payload, items),
    raw: payload,
  }
}