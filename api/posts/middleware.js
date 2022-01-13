const Posts = require('./posts-model')

function checkId(req, res, next) {
    Posts.findById(req.params.id)
        .then(user => {
            if(!user) {
                res.status(404).json({message: 'does not exist'})
            }
            else { 
                req.user = user
                next() 
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
}

function checkPayload(req, res, next) {
    const {title, contents} = req.body
    if(!title || !contents) {
        res.status(400).json({ message: "Please provide title and contents for the post" })
    }
    else { next() }
}

module.exports = {
    checkId,
    checkPayload
}