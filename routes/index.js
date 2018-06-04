const { Router } = require('express');
const monsters = require('./monsters');
const habitats = require('./habitats');

const router = Router();

router.use('/monsters', monsters);
router.use('/habitats', habitats);

module.exports = router;