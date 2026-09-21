import Food from '../models/Food.js'

// GET all foods
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find()

    res.status(200).json(foods)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// CREATE a new food
const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body)

    res.status(201).json(food)
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

export {
  getFoods,
  createFood,
}