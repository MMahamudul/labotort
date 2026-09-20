import ProgressBar from './ProgressBar'

const MacroCard = ({ name, consumed, goal, unit }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {name}
      </p>

      <div className="mt-2">
        <span className="text-2xl font-bold text-slate-900">
          {consumed}
        </span>

        <span className="ml-1 text-sm text-slate-500">
          / {goal}{unit}
        </span>
      </div>

      <div className="mt-4">
        <ProgressBar value={consumed} max={goal} />
      </div>
    </article>
  )
}

export default MacroCard