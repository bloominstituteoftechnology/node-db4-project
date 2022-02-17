const router = require('express').Router()



router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      custom: "Something is wrong in the router",
      message: err.message,
      stack: err.stack,
    });
    next()
});

module.exports = router