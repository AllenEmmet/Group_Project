const Activity = require("../models/activity.model");

//Creating a new activity
module.exports.createActivity = (req, res) => {
  Activity.create(req.body)
    .then((newActivity) => {
      res.json({ newActivity });
      console.log(res.body);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all activities
module.exports.getAllActivity = (req, res) => {
  Activity.find()
    .then((allActivity) => {
      res.json(allActivity);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one activity
module.exports.getOneActivity = (req, res) => {
  Activity.findOne({ _id: req.params.id })
    .then((queriedActivity) => {
      res.json(queriedActivity);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an activity
module.exports.updateActivity = (req, res) => {
  Activity.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedActivity) => {
      res.json({ updatedActivity });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an activity
module.exports.deleteActivity = (req, res) => {
  Activity.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}