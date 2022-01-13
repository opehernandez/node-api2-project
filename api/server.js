// implement your server here
// require your posts router and connect it here
const postRouter = require('./posts/posts-router')
const express = require('express')

const server = express()

server.use(express.json())

server.use('/api/posts', postRouter)




module.exports = server