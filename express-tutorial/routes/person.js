const express = require("express");
const router = express.Router();
const {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/person");

// router.get("/", getPersons);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router
  .route("/")
  .get(getPersons)
  .post(createPerson);
router
  .route("/:id")
  .put(updatePerson)
  .delete(deletePerson);

module.exports = router;
