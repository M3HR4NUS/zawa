const {Router}=require('express');

const {getRegister,postLogin}=require('../controllers/userController')

const router= new Router();

router.get('/register', getRegister )
router.post('/register', postLogin )

module.exports = router;