const express = require('express');
const router = express.Router();

//@route  GET api/post/test
//@desc  tests post route
//@acess public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
