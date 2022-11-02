const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  const userData = await User.findByPk(req.params.id).catch((err) =>
    res.status(404).json(err)
  );
  res.status(200).json(userData);
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.status(404).json(err));
  res.status(200).json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.status(404).json(err));
  res.status(200).json(userData);
});

module.exports = router;
