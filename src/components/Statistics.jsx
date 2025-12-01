import "../styles/Statistics.css";

function Statistics({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter((t) => t.status === "completed").length;
  const notStarted = technologies.filter((t) => t.status === "not-started").length;
  const inProgress = technologies.filter((t) => t.status === "in-progress").length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-header">
      <h2>Прогресс изучения</h2>
      <p>
        Всего технологий: {total} | Изучено:{" "}{completed}
      </p>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <p className="percent-text">{percent}% выполнено</p>
    </div>
  );
}

export default Statistics;
