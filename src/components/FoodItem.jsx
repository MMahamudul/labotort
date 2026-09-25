const FoodItem = ({ name, meal, calories, onDelete }) => {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4 last:border-0">
      <div>
        <h3 className="font-medium text-slate-900">
          {name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {meal}
        </p>
      </div>

      <p className="font-semibold text-slate-700">
        {calories} kcal
      </p>
      <button
          type="button"
          onClick={onDelete}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Delete
        </button>
    </div>
  )
}

export default FoodItem