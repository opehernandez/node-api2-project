// require your server and launch it here
const server = require('./api/server')
const PORT = 8000
server.listen(8000, () => {
    console.log(`server listening on port ${PORT}`)
})