const router = require('express').Router()

router.get('/', (req, res) => {
    req.query
    res.send({
        status: 'succesfully',
        mesagge: 'Welcome to my home page'
    })
})

router.get('/reservasi/:id', (req, res) => {
    console.log(req.query)
    res.json({
        table: req.params.id
    })
})
 
router.get('/:category/:tag', (req, res) => {
    const { category, tag} = req.params
    res.json({
        category, tag
    });
})


module.exports = router
