import express from 'express'
import rp from 'request-promise'
import mock from '../../mock/battersea.json'
import startCase from 'lodash.startcase'

const api = express.Router()

api.get('/', (req, res) => {
  const options = { method: 'GET',
    url: 'https://www.battersea.org.uk/api/animals/dogs',
    json: true
  }
  return rp(options).then((data) => {
    return res.json(parseData(data))
  })
})

api.get('/mock', (req, res) => {
  return res.json(parseData(mock))
})

const parseData = (data) => {
  var dogs = []
  for (const animal of Object.values(data.animals)) {
    dogs.push({
      id: animal.nid,
      name: startCase(animal.title),
      thumbnail: animal.field_animal_thumbnail,
      sex: startCase(animal.field_animal_sex),
      size: startCase(animal.field_animal_size),
      breed: startCase(animal.field_animal_breed),
      date_published: animal.field_animal_date_published,
      location: startCase(animal.field_animal_centre),
      href: `https://www.battersea.org.uk${animal.path}`
    })
  }
  return dogs.sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
}

export default api
