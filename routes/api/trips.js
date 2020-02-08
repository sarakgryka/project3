const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");


router.route("/")
  .post(tripsController.create);

router.route("/alltrips/:user")
  .get(tripsController.findAll)
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
