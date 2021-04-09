import { handleRequest } from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (e) =>
        new Response(JSON.stringify({ error: e.message }), { status: 500 }),
    ),
  )
})
