
const routeProtector = (req, res, next) => {
    console.log(req.session);
    if (req.session && req.session.userID) return next()
    return res.send("Forbidden, please log in");
  };

  module.exports = routeProtector;