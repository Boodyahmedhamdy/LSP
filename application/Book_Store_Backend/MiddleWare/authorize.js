const connection = require("../DataBase/connection");
const util = require("util"); // helper

const authorized = async (req, res, next) => {
  const query = util.promisify(connection.query).bind(connection);
  const { token } = req.headers;
  const userDataInDataBase = await query("select * from users where token = ?", [token]);
  if (userDataInDataBase[0]) {
    next();
  } else {
    res.status(403).json({
      msg: "you are not authorized to access this route !",
    });
  }
};

module.exports = authorized;