import {useEffect,  useState } from 'react'

const FoodForm = ({ onAddFood, onUpdateFood, editingFood}) => {
  const [formData, setFormData] = useState({
    name: '',
    meal: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  })

  useEffect(() => {
  if (editingFood) {
    setFormData({
      name: editingFood.name,
      meal: editingFood.meal,
      calories: editingFood.calories,
      protein: editingFood.protein,
      carbs: editingFood.carbs,
      fat: editingFood.fat,
    })
  }
}, [editingFood])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

 // POST a new food to backend
  const handleSubmit = async (event) => {
  event.preventDefault()

  const foodData = {
    ...formData,
    calories: Number(formData.calories),
    protein: Number(formData.protein),
    carbs: Number(formData.carbs),
    fat: Number(formData.fat),
  }

  if (editingFood) {
    await onUpdateFood(editingFood._id, foodData)
  } else {
    await onAddFood(foodData)
  }

  setFormData({
    name: '',
    meal: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  })
}

  return (
    <form
  onSubmit={handleSubmit}
  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
>
      <h2 className="text-lg font-semibold text-slate-900">
  {editingFood ? 'Edit Food' : 'Add Food'}
</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Food name"
          className="rounded-lg border border-slate-300 px-3 py-2"
        />

        <select
          name="meal"
          value={formData.meal}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="">Select meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>

        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          placeholder="Calories"
          className="rounded-lg border border-slate-300 px-3 py-2"
        />

        <input
          type="number"
          name="protein"
          value={formData.protein}
          onChange={handleChange}
          placeholder="Protein (g)"
          className="rounded-lg border border-slate-300 px-3 py-2"
        />

        <input
          type="number"
          name="carbs"
          value={formData.carbs}
          onChange={handleChange}
          placeholder="Carbs (g)"
          className="rounded-lg border border-slate-300 px-3 py-2"
        />

        <input
          type="number"
          name="fat"
          value={formData.fat}
          onChange={handleChange}
          placeholder="Fat (g)"
          className="rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="mt-5 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white"
      >
        {editingFood ? 'Update Food' : 'Save Food'}
      </button>
    </form>
  )
}

export default FoodForm