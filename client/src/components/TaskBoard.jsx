export default function TaskBoard({ tasks }) {
  const columns = {
    todo: 'برای انجام',
    doing: 'در حال انجام',
    done: 'انجام‌شده',
  };
  const colors = {
    low: 'bg-green-200',
    medium: 'bg-yellow-200',
    high: 'bg-red-200',
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(columns).map(([key, label]) => (
        <div key={key} className="bg-highlight p-2 rounded min-h-[200px]">
          <h3 className="text-center font-bold mb-2">{label}</h3>
          {tasks.filter((t) => t.status === key).map((t) => (
            <div key={t.id} className={`p-2 mb-2 rounded ${colors[t.priority]}`}>
              <div>{t.title}</div>
              <div className="text-sm">{t.assignee}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
