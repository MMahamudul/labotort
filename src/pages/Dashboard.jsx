import { useState } from 'react'
import CalorieSummary from '../components/CalorieSummary.jsx'
import MacroCard from '../components/MacroCard.jsx'
import FoodItem from '../components/FoodItem.jsx'

const Dashboard = () => {
  // Macronutrient data
  const macros = [
    {
      id: 1,
      name: 'Protein',
      consumed: 82,
      goal: 120,
      unit: 'g',
    },
    {
      id: 2,
      name: 'Carbs',
      consumed: 145,
      goal: 220,
      unit: 'g',
    },
    {
      id: 3,
      name: 'Fat',
      consumed: 46,
      goal: 65,
      unit: 'g',
    },
  ]

  // Food data
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: 'Oatmeal with banana',
      meal: 'Breakfast',
      calories: 350,
    },
    {
      id: 2,
      name: 'Greek yogurt',
      meal: 'Breakfast',
      calories: 120,
    },
    {
      id: 3,
      name: 'Chicken rice bowl',
      meal: 'Lunch',
      calories: 630,
    },
  ])

  return (
    <div>
      {/* Dashboard heading */}
      <p className="text-sm font-medium text-slate-500">
        Saturday, September 20
      </p>

      <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
        Nutrition Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Keep track of your daily nutrition goals.
      </p>

      {/* Calorie summary */}
      <div className="mt-8">
        <CalorieSummary
          consumed={1420}
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

      {/* Today's meals */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Today's Meals
          </h2>

          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
            + Add Food
          </button>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
          {foods.map((food) => (
            <FoodItem
              key={food.id}
              name={food.name}
              meal={food.meal}
              calories={food.calories}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard