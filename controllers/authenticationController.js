const authentication = require("../models/authenticationModel");
const { createJwt } = require("../utils/auth");

exports.showUser = async (req, res) => {
  try {
    const data = await authentication.find();
    res.json({ message: "Data Fetched !!", data: data });
  } catch (error) {
    throw new Error(error);
  }
};

// exports.findUserById = async (req, res) => {
//   try {
//     const data = await authentication.findById();
//   } catch (error) {}
// };

exports.signupUser = async (req, res) => {
  try {
    const getData = await authentication.find();
    const username = getData.map((ele) => ele.username);

    if (!username.includes(req.body.username)) {
      const data = await authentication.create(req.body);
      res.json({ message: "Signup Successful", data: data });
    } else {
      res.json({ message: "Username not available !! Try Different username" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.loginUser = async (req, res, next) => {
  
  try {
    const data = await authentication.findOne({ username: req.body.username });
    if (!data) throw new Error("Username not found");

    // we have to run some checks that password matches or not
    const pass = await data.correctPassword(req.body.password, data.password);
    if (!pass) throw new Error("Incorrect Password");

    // we have to return jwt
    // yeh jo data hai woh mongoose ka object hai to usko convert krna hoga normal object m
    const token = createJwt(JSON.parse(JSON.stringify(data)));

    res.json({ message: "Login SuccessFully !!", token: token });
  } catch (error) {
    // agr error aati hai to yeh next error middleware m bhej dega
    next(error);
  }
};
