const { verify } = require("../utils/jwt");

const CheckRole = (role) => {
  return (req, res, next) => {
    const { user } = req;
    // console.log(user);

    if (role === "superadmin") {
      if (user.role === "superadmin") return next();
      else return res.status(403).json({ message: "Permission denied"});
    } else if (role === "teacher") {
      if (user.role === "teacher" || user.role === role) return next();
      else return res.status(403).json({ message: "Permission denied"});
    }else if (role === "zauch"){
     if (user.role === role) return next();
     else return res.status(403).json({ message: "Permission denied"});
    }else{
     return res.status(403).json({ message: "Permission denied"});
    }
  };
};
module.exports = {CheckRole};