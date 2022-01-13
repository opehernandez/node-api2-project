// implement your posts router here
const express = require('express')

const router = express.Router()
const Posts = require('./posts-model')
const { checkId, checkPayload } = require('./middleware')
const req = require('express/lib/request')
router.get('/', (req, res, next) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
})

router.get('/:id', checkId, (req, res, next) => {
    res.status(200).json(req.user)
})

router.post('/', checkPayload, (req, res, next) => {
    Posts.insert(req.body)
        .then(userCreated => {
            req.body.id = userCreated
            res.status(201).json(req.body)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.put('/:id', checkPayload, checkId, (req, res, next) => {
    Posts.update(req.params.id, req.body)
        .then(userUpdated => {
            req.body.id = userUpdated
            res.status(500).json(req.body)
        })
})

router.delete('/:id', checkId, (req, res , next) => {
    Posts.remove(req.params.id)
        .then(userDeleted => {
            res.status(200).json(req.user)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.get('/:id/comments', checkId, (req, res, next) => {
    Posts.findPostComments(req.params.id)
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})





module.exports = router