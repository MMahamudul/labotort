const FoodItem = ({ name, meal, calories }) => {
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
    </div>
  )
}

export default FoodItem