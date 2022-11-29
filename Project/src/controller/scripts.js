const SECRET = process.env.SECRET;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TokenVerifier = (header = "", SECRET) => {
    const token = header.split(" ")[1];
    if(!token) {
        return true;
    }
    const blocked = jwt.verify(token, SECRET, function(error) {return error});
    if (blocked) {
        return true;
    };
    return false;
};

module.exports = {
    TokenVerifier,
}