const express = require('express')
const cors = require("cors")
const dataRouter = require('./routes/data.routes')

const PORT = 3000  // process.env.PORT ||

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', dataRouter)

app.get('/api', (req, res) => {
  res.json(data)
})



app.listen(PORT, () => { console.log(`server has been started at ${PORT}`) })