import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    meal: {
      type: String,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
      min: 0,
    },

    protein: {
      type: Number,
      default: 0,
      min: 0,
    },

    carbs: {
      type: Number,
      default: 0,
      min: 0,
    },

    fat: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Food = mongoose.model('Food', foodSchema)

export default Food