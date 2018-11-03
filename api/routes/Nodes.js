const express = require('express')
const router = express.Router()
const passport = require('passport')

const NodeModel = require('../../database/models/Node')

const AuthMiddleware = passport.authenticate('jwt', { session: false })

router.get('/', async (req, res, next) => {
    let nodes = await NodeModel.find()
    res.json(nodes);
})

router.post('/', AuthMiddleware, async (req, res, next) => {
    try {
        let node = await NodeModel.create(req.body);
        res.json(node);
    }catch(err){
        res.status(500).json(err.errmsg)
    }
})

router.get('/:_id', async (req, res, next) => {
    let node = await NodeModel.findOne(req.params);
    res.json(node);
})

router.put('/:_id', AuthMiddleware, async (req, res, next) => {
    let node = await NodeModel.updateOne(req.params, req.body);
    res.json(node);
})

module.exports = router
