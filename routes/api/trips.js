const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");


router.route("/trips")
 
  .post(tripsController.create);

router.route("/alltrips")
.get(tripsController.findAll)
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
