const express = require('express');
const router = express.Router();

//@route  GET api/profile/test
//@desc  tests profile route
//@acess public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

module.exports = router;
