const jwt = require('jsonwebtoken');

const sessions = (users) => {
  const createFakeSessions = users.map(currentUser => {
    return {
      user: currentUser,
      token: jwt.sign({ id: currentUser.id }, 'fakeSecretKey')
    }
  });

  return createFakeSessions;
};

module.exports = (users) => sessions(users);