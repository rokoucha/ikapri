import { getUserStats, UserStats } from './statink'
import { renderWidget } from './widget'

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)

  const screenName = url.searchParams.get('screenName')
  if (!screenName) {
    return new Response(
      JSON.stringify({ error: 'query "screenName" not found' }),
      { headers: { 'Content-Type': 'application/json' }, status: 400 },
    )
  }

  let stats: UserStats
  try {
    stats = await getUserStats({ screenName })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    })
  }

  const widget = renderWidget({ screenName, stats })

  return new Response(widget, {
    headers: {
      'Cache-Control': 'max-age=86400, public, stale-while-revalidate=3600',
      'Content-Type': 'image/svg+xml',
      'Last-Modified': stats.updated_at.time.toUTCString(),
      'X-Robots-Tag': 'noindex',
    },
  })
}
