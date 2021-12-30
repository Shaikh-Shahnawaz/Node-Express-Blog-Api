// here we are authenticate the token data is match with DB data or not

const jwt = require('jsonwebtoken');
const key = process.env.SECRET_KEY;
const util = require('util');
const { showUser } = require('../controllers/authenticationController');

exports.authenticate = async (req, res, next) => {
    let token;
    try {
        
        if (req.headers.authorization) {
            token = req.headers.authorization
        }
        
        if (!token) throw new Error("Token Not Present");
        
        const decode = await util.promisify(jwt.verify)(token, key);
        
        // console.log( await showUser({ _id: decode._id }),'====')
    const userExists = await showUser({ _id: decode._id });
    // console.log(userExists,'===')

    if (!userExists) throw new Error('User Not Found');

    req.body ? (req.body._id = decode._id) : (req.params._id = decode._id);

    next()

  } catch (error) {
    next(error)
  }
};
