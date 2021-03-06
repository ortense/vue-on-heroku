import express from 'express'
import path from 'path'

const port = process.env.PORT
const app = express()

app.use(express.static(__dirname + '/'))
app.get('/*', (request, response) => response.sendfile('./index.html'))
app.listen(port, () => console.log(`server started on port ${port}`))