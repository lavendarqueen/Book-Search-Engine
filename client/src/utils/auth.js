const { GraphQLError } = require("graphQLError");
const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authrnticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  // function for our authenticated routes
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
