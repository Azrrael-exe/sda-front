var express = require('express');
var router = express.Router();

// ==== MAIN ====

router.get('/:user', function(req, res) {
  res.render('index.ejs', {
    user : req.params.user
  })
});


module.exports = router;
