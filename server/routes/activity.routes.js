const ActivityController = require("../controllers/activity.controller");

module.exports = (app) => {
    //create
  app.post("/api/activity", ActivityController.createActivity);
    //read
  app.get("/api/activity", ActivityController.getAllActivity);
  app.get("/api/activity/:id", ActivityController.getOneActivity);
    //update
  app.put("/api/activity/:id", ActivityController.updateActivity);
    //delete
  app.delete("/api/activity/:id", ActivityController.deleteActivity);
};