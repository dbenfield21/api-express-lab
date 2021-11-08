import { Router } from 'express'
const router = Router()
import * as catsCtrl from "../controllers/cats.js"


// GET	/api/cats	Retrieve ALL cats
router.get("/cats", catsCtrl.index)


// GET	/api/cats/:id	Retrieve a SINGLE cat
router.get("/cats/:id", catsCtrl.show)

// POST	/api/cats	Add a cat. 
// Add on postman example from puppy lecture: post request, body-raw, json. Example below
// {
// "name": "dog",
// "breed": "chihuahua",
// "age": "1"
// }
router.post("/cats", catsCtrl.create) 


// PUT	/api/cats/:id	Update a cat
router.put("cats", catsCtrl.update)

// DELETE	/api/cats/:id	Delete a cat
router.delete("cats/:id", catsCtrl.delete)





export {
  router
}
