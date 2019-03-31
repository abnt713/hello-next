require('dotenv').config()

const express = require('express')
const next = require('next')

const isDev = process.env.NODE_ENV !== 'production'
const app = next({ dev: isDev })
const nextHandler = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return nextHandler(req, res)
    })

    const serverPort = process.env.PORT
    server.listen(serverPort, err => {
      if (err) throw err
      console.log(`Ready on http://localhost:${serverPort}`)
    })
  })
  .catch(ex => {
    console.log(ex.stack)
    process.exit(1)
  })
