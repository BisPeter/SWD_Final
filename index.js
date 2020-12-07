const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const appInsights = require('applicationinsights');


appInsights.setup('bd018e96-762a-4bf9-af8f-9877c74a0c7f').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
