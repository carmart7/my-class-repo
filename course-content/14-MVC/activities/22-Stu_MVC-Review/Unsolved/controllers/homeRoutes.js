const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await User.findAll();
  const users = userData.map((user) => user.get({plain: true}));
  const sortedUsers = users.sort((a, b) => {
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    if(a.name == b.name){
      return 0;
    }
  })
  res.render('homepage', {
    sortedUsers
  });
});

module.exports = router;
