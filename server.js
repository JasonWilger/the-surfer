const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))
app.use(express.static('views'))

app.listen(port, () => {
  console.log(`App listening on PORT ${port}`)
})