const jwt = require("jsonwebtoken");
const { tokenSecretKey, tokenExpireDate } = require("../secret");

const jwtToken = (findUser) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    city,
    postCode,
    country,
    regionState,
    isAdmin,
  } = findUser;

  const genTokenData = {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    city,
    postCode,
    country,
    regionState,
    isAdmin,
  };

  return jwt.sign(genTokenData, tokenSecretKey, {
    expiresIn: tokenExpireDate,
  });
};

module.exports = jwtToken;
