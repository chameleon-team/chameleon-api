let passport = {
  login: function (cb) {
    cb(null, 'sometoken', '1800000000');
  },
  get: function (cb) {
    cb(null, 'sometoken', '1800000000');
  }
}

export default passport;
