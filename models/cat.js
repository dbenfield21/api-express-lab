import mongoose from 'mongoose'

const Schema = mongoose.Schema

const catSchema = new Schema({
  name: {type: String},  
  spicy: {type: String}, 
  energy: {type: Number, default: 0}, 
})

const Cat = mongoose.model('Cat', catSchema)

export {
  Cat,
}

