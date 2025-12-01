// pages/TechnologyList.js
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useTechnologies from '../hooks/useTechnologies.js';
import TechnologyCard from '../components/TechnologyCard.jsx';
import TechnologySearch from '../components/TechnologySearch.jsx';

import '../styles/TechnologiesPage.css'

function TechnologyList({technologies, updateStatus}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState("all");

  const filteredTechnologies = technologies.filter(tech => {
      const search = tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase())
      return search && (tech.status === filter || filter === "all")
    }
  );

  return (
    <div className="technologies-page">
      <Link to="/add-technology" className="btn btn-primary">
        + Добавить технологию
      </Link>
      <TechnologySearch className="search"
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        filteredTechnologies={filteredTechnologies} 
        setFilter={setFilter} filter={filter}/>

      <h2>Список технологий</h2>

      {filteredTechnologies.map(tech => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          onClick={() => updateStatus(tech.id, 'next')}
        />
      ))}
    </div>
  );
}

export default TechnologyList;