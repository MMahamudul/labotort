const ProgressBar = ({ value, max }) => {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-slate-900 transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar