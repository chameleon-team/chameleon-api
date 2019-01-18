
module.exports = [
  {
    method: ['get', 'post'],
    path: '/api/getMessage',
    controller: function (req, res, next) {
      res.json({
        total: 0,
        message: [{
          name: 'Hello chameleon!'
        }]
      });
    }
  },
  {
    method: ['get'],
    path: '/api/getMessageJsonp',
    controller: function (req, res, next) {
      const data = {
        total: 0,
        message: [{
          name: 'Hello chameleon!'
        }]
      }
      res.send(`${req.query.callback}(${JSON.stringify(data)})`);
    }
  }
]
