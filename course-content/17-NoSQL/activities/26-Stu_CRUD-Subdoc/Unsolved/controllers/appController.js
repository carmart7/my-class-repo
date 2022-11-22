const { Application, User } = require('../models');

module.exports = {
  getApplications(req, res) {
    Application.find()
      .then((applications) => res.json(applications))
      .catch((err) => res.status(500).json(err));
  },
  getSingleApplication(req, res) {
    Application.findOne({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with that ID' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the createApplication method
  // Creates application
  // updates user to include the created application to its applications array property
  createApplication(req, res) {
    Application.create(req.body)
      .then((application) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { applications: application._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Application created, but found no user with that ID',
            })
          : res.json('Created the application 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the updateApplication method
  // updates application based on given parameter applicationId
  // sets new info on application (runs validators to make sure info follows the model requirements)
  updateApplication(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // TODO: Add comments to the functionality of the deleteApplication method
  // find and remove application based on the application id given in the paramenters
  deleteApplication(req, res) {
    Application.findOneAndRemove({ _id: req.params.applicationId })
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : User.findOneAndUpdate(
              { applications: req.params.applicationId },
              { $pull: { applications: req.params.applicationId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Application created but no user with this id!',
            })
          : res.json({ message: 'Application successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  // adds a tag to an application (runs validation when adding tag) without adding repeats
  addTag(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $addToSet: { tags: req.body } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO: Add comments to the functionality of the addTag method
  // removes a tag from an application
  removeTag(req, res) {
    Application.findOneAndUpdate(
      { _id: req.params.applicationId },
      { $pull: { tags: { tagId: req.params.tagId } } },
      { runValidators: true, new: true }
    )
      .then((application) =>
        !application
          ? res.status(404).json({ message: 'No application with this id!' })
          : res.json(application)
      )
      .catch((err) => res.status(500).json(err));
  },
};
