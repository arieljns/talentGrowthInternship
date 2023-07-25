const router = require("express").Router();
const userController = require("./usercontroller");

function useRoute() {
  router.get("/", new userController().readData);
  router.post("/", new userController().createData);
  router.post("/update/:id", new userController().updateData);
  router.get("/delete/:id", new userController().deleteData);

  router.get("/edit/:id", new userController().edit)
  return router;
}

module.exports = (app) => {
  app.use("/", useRoute());
};
