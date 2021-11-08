import { Cat } from "../models/cat.js";


function index(req, res) {
	Cat.find({}, function(err, cats) {
	  res.status(200).json(cats)
	});
}

function show(req, res){
  Cat.findById(req.params.id)
  .then(cat => {
      res.json(cat)
  })
  .catch(err => {
    res.json(err)
})
}

function create(req, res) {
  Cat.create(req.body)
  .then(cat =>
    res.json(cat)
)}

function update (req, res) {
    Cat.findByIdAndUpdate(req.params.id, req.body,
      {new: true})
    .then(cat => {
        res.json(cat)
    })
    .catch(err => {
        res.json(err)
    })
}


function deleteCat (req, res) {
  Cat.findByIdAndDelete(req.params.id)
  .then (cat =>{
    res.json(cat)
})
}



export {
  index,
  show, 
  create, 
  update, 
  deleteCat as delete,
}