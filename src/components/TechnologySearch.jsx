import "../styles/TechnologySearch.css"

function TechnologySearch({searchQuery, setSearchQuery, filteredTechnologies, setFilter, filter}) {
    return (
        <div className='search-div'>
          <input
            type="text"
            placeholder="Поиск технологий..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>Найдено: {filteredTechnologies.length}</span>

          <button className={filter == "all" ? "active" : ""} onClick={() => setFilter("all")}>Все</button>
          <button className={filter == "not-started" ? "active" : ""} onClick={() => setFilter("not-started")}>Не начатые</button>
          <button className={filter == "in-progress" ? "active" : ""} onClick={() => setFilter("in-progress")}>В процессе</button>
          <button className={filter == "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Выполненные</button>
        </div>
    )
}

export default TechnologySearch;