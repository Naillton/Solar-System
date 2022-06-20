let reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

const validateUsername = (req, res, next) => {
    const { username } = req.body;
    console.log(username);
    if (username.length < 3) return res.status(400).json({ message: "invalid data" });
    next(); 
}

const validateData = (req, res, next) => {
  const { email, password } = req.body;
  console.log(password);
  if (!reg.test(email) || password.length <= 4 && password.length <= 8) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
}

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  console.log(password);
  if (!reg.test(email) || password.length < 4 && password.length <= 8) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }
  next();
}
module.exports = {
  validateUsername,
  validateData,
  validateLogin
}