import ProgressBar from './ProgressBar.jsx'

const CalorieSummary = ({ consumed, goal }) => {
  const remaining = Math.max(goal - consumed, 0)

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Today's Calories
      </p>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="text-4xl font-bold text-slate-900">
            {consumed.toLocaleString()}
          </span>

          <span className="ml-2 text-slate-500">
            kcal
          </span>
        </div>

        <p className="text-sm text-slate-500">
          {goal.toLocaleString()} kcal goal
        </p>
      </div>

      <div className="mt-5">
        <ProgressBar value={consumed} max={goal} />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        <span className="font-semibold text-slate-800">
          {remaining.toLocaleString()}
        </span>{' '}
        kcal remaining
      </p>
    </section>
  )
}

export default CalorieSummary