
export default function ActivityCard() {
  const activity = [
    [1, 2, 0, 3, 4, 1, 2],
    [2, 3, 1, 4, 2, 0, 1],
    [0, 1, 2, 3, 4, 2, 1],
    [1, 4, 3, 2, 1, 0, 2],
    [2, 3, 4, 1, 2, 3, 4],
  ];

  const getColor = (value: number) => {
    switch (value) {
      case 0:
        return "bg-slate-700";
      case 1:
        return "bg-green-900";
      case 2:
        return "bg-green-700";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-green-400";
      default:
        return "bg-slate-700";
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4">
        Learning Activity
      </h2>

      <p className="text-slate-400 text-sm mb-6">
        Last 35 days
      </p>

      <div className="space-y-2">
        {activity.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`w-5 h-5 rounded-sm ${getColor(cell)}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 text-xs text-slate-500">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  );
}

