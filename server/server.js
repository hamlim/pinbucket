// server.js
// where your node app starts

// init project
const express = require('express')
const cors = require('cors')

const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('db.json')

const app = express()

app.use(cors())

const schema = buildSchema(`
  type Coordinates {
    latitude: Float!,
    longitude: Float!
  }
  type Location {
    coordinates: Coordinates!,
    time: String!,
    message: String,
    id: String!
  }
  type Query {
    getLocation(id: String!): Location,
    getAllLocations: [Location]
  }
  type Mutation {
    postLocation(latitude: Float!, longitude: Float!, message: String): Location
  }
`)

const makeLocation = ({ coordinates, message, id }) => {
  const dt = new Date()
  return {
    coordinates,
    message,
    id,
    time: dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate(),
  }
}

low(adapter)
  .then(db => {
    const root = {
      getLocation({ id }) {
        const locations = db.get('locations').value()
        if (locations.length === 0) {
          throw new Error('No locations in the database yet. Try posting one.')
        }
        const foundLocation = locations.find(loc => loc.id === id)
        return foundLocation
      },
      postLocation({ latitude, longitude, message = '' } = {}) {
        if (latitude == null || longitude == null) {
          throw new Error('No coordinates specified in the mutation!')
        }
        const len = db
          .get('locations')
          .value()
          .length.toString()
        const loc = makeLocation({
          coordinates: { latitude, longitude },
          message,
          id: len,
        })
        db.update('locations', locs => [...locs, loc]).write()
        return loc
      },
      getAllLocations() {
        const locations = db.get('locations').value()
        return locations
      },
    }

    app.use(
      '/graphql',
      graphqlHTTP({ schema, rootValue: root, graphiql: true }),
    )

    return db.defaults({ locations: [] }).write()
  })
  .then(() => {
    // listen for requests :)
    const listener = app.listen(process.env.PORT, () => {
      console.log('Your app is listening on port ' + listener.address().port)
    })
  })
