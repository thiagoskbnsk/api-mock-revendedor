const jwt = require('jsonwebtoken');

const sessions = (users) => {
  const createFakeSessions = users.map(currentUser => {
    const { taxpayer_identification, id, ...rest } = currentUser;

    return {
      user: rest,
      token: jwt.sign({ id: currentUser.id }, 'fakeSecretKey')
    }
  });

  return createFakeSessions;
};

module.exports = (users) => sessions(users);