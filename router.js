const Router = require('koa-router')
const router = new Router()
const user = require('./controller/user')

router.post('/user/login', user.login)
router.get('/user/profile', user.profile)
router.get('/api/setting', user.setting)
router.get('/movie', user.movie)

module.exports = router