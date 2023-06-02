const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app.set('port', 5050)

app.use(cors())

app.get('/api/v1/ideas', async (request, response) => {
  const ideas = await knex.select().from('ideas')
  response.status(200).json(ideas)
})

app.post('/api/vi/ideas', (request, response) => {
  console.log('close')
  const data = request.body
  
  for (let requiredParameter of ['id', 'title', 'description']) {
    if (!data[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
  }

  // app.ideas = [...app.ideas, data];

  return response.status(201).json(data);
})

app.listen(5050, () => {
  console.log('server has started on port 5050')
})  