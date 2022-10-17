const Food = require("../models/activity.model");

//Creating a new food
module.exports.createFood = (req, res) => {
  Food.create(req.body)
    .then((newFood) => {
      res.json({ newFood });
      console.log(res.body);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all activities
module.exports.getAllFood = (req, res) => {
  Food.find()
    .then((allFoods) => {
      res.json(allFoods);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one food
module.exports.getOneFood = (req, res) => {
  Food.findOne({ _id: req.params.id })
    .then((queriedFood) => {
      res.json(queriedFood);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an food
module.exports.updateFood = (req, res) => {
  Food.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedFood) => {
      res.json({ updatedFood });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an food
module.exports.deleteFood = (req, res) => {
  Food.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}