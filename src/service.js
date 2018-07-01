export const postLocation = variables => {
  return fetch('https://pinbucket-server.glitch.me/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation PostLocation($latitude: Float!, $longitude: Float!, $message: String) {
          postLocation(latitude: $latitude, longitude: $longitude, message: $message) {
            id
          }
        }
      `,
      variables,
    }),
  }).then(r => r.json())
}
