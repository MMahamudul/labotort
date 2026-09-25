import { useEffect, useState } from 'react'
import CalorieSummary from '../components/CalorieSummary.jsx'
import MacroCard from '../components/MacroCard.jsx'
import FoodItem from '../components/FoodItem.jsx'
import FoodForm from '../components/FoodForm.jsx'

import {
  getFoods,
  createFood,
  deleteFood,
  updateFood
} from '../services/foodApi.js'

const Dashboard = () => {
  const [foods, setFoods] = useState([])
  const [editingFood, setEditingFood] = useState(null)


  // GET foods from backend
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoods()
        setFoods(data)
      } catch (error) {
        console.error('Error fetching foods:', error)
      }
    }

    fetchFoods()
  }, [])
// Add Food

const handleAddFood = async (foodData) => {
  try {
    const newFood = await createFood(foodData)

    setFoods((previousFoods) => [
      ...previousFoods,
      newFood,
    ])
  } catch (error) {
    console.error('Error creating food:', error)
  }
}
// Update Food

const handleUpdateFood = async (id, foodData) => {
  try {
    const updatedFood = await updateFood(id, foodData)

    setFoods((previousFoods) =>
      previousFoods.map((food) =>
        food._id === id ? updatedFood : food
      )
    )

    setEditingFood(null)
  } catch (error) {
    console.error('Error updating food:', error)
  }
}

const handleEditFood = (food) => {
  setEditingFood(food)
}

// Delete Food
const handleDeleteFood = async (id) => {
  try {
    await deleteFood(id)

    setFoods((previousFoods) =>
      previousFoods.filter((food) => food._id !== id)
    )
  } catch (error) {
    console.error('Error deleting food:', error)
  }
}

 const totalCalories = foods.reduce((total, food) => {
  return total + food.calories
}, 0)

// Calculate totals from foods
const totalProtein = foods.reduce(
  (total, food) => total + food.protein,
  0
)

const totalCarbs = foods.reduce(
  (total, food) => total + food.carbs,
  0
)

const totalFat = foods.reduce(
  (total, food) => total + food.fat,
  0
)
const macros = [
  {
    id: 1,
    name: 'Protein',
    consumed: totalProtein,
    goal: 120,
    unit: 'g',
  },
  {
    id: 2,
    name: 'Carbs',
    consumed: totalCarbs,
    goal: 220,
    unit: 'g',
  },
  {
    id: 3,
    name: 'Fat',
    consumed: totalFat,
    goal: 65,
    unit: 'g',
  },
]

console.log('Editing food:', editingFood)

  return (
    <div>
      
      <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
        BiteScale
      </h1>

      <h3 className="mt-2 text-slate-500">
        Keep track of your daily calorie goals.
      </h3>

      {/* Calories */}
      <div className="mt-8">
        <CalorieSummary 
        consumed={totalCalories} 
        goal={2000} 
        />
      </div>

      {/* Macronutrients */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Macronutrients
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {macros.map((macro) => (
            <MacroCard
              key={macro.id}
              name={macro.name}
              consumed={macro.consumed}
              goal={macro.goal}
              unit={macro.unit}
            />
          ))}
        </div>
      </section>

      {/* Add Food Form */}
      <section className="mt-8">
   <FoodForm
  onAddFood={handleAddFood}
  onUpdateFood={handleUpdateFood}
  editingFood={editingFood}
/>
      </section>

      {/* Today's Meals */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Today's Meals
        </h2>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
          {foods.map((food) => (
            <FoodItem
              key={food._id}
              name={food.name}
              meal={food.meal}
              calories={food.calories}
              onEdit={() => handleEditFood(food)}
              onDelete={() => handleDeleteFood(food._id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard