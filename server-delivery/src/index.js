const app = require('./app')
const PORT = process.env.PORT || 4003

const HOST = process.env.NODE_ENV == "development" ? 'localhost' : process.env.HOSTNAME 

app.listen(PORT, () => {
  console.log(`http://${HOST}:${PORT}/server-delivery`)
})