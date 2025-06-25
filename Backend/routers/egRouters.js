const express = require('express');
const router = express.Router();
const { getRoute, signupRoute, putRoute, deleteRoute,getRouteById,loginRoute } = require('../controllers/egControllers');

router.get('/get', getRoute)
router.get('/get/:id', getRouteById)
//router.post('/post', postRoute)
router.post('/signup', signupRoute)
router.put('/put/:id', putRoute)
router.delete('/delete/:id', deleteRoute)
router.post('/login',loginRoute)

/*router.get('/get' ,(req,res) => {
    res.send('Get route is working');
})

router.post('/post',(req,res) => {
    res.send('Post route is working');
})

router.put('/put',(req,res) => {
    res.send('Put route is working');
})

router.delete('/delete',(req,res) => {
    res.send('Delete route is working');
})*/

module.exports = router;