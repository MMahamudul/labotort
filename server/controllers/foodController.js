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

// UPDATE a food
const updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    if (!food) {
      return res.status(404).json({
        message: 'Food not found',
      })
    }

    res.status(200).json(food)
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}


// DELETE a food
const deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id)

    if (!food) {
      return res.status(404).json({
        message: 'Food not found',
      })
    }

    res.status(200).json({
      message: 'Food deleted successfully',
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

export {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
}