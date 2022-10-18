const Food = require("../controllers/food.controller");

module.exports = (app) => {
    //create
  app.post("/api/food", Food.createFood);
    //read
  app.get("/api/food", Food.getAllFood);
  app.get("/api/food/:id", Food.getOneFood);
    //update
  app.put("/api/food/:id", Food.updateFood);
    //delete
  app.delete("/api/food/:id", Food.deleteFood);
};