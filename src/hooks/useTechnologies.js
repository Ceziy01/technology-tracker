import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from 'react';

function useTechnologies() {
  const [technologies, setTechnologies] = useLocalStorage('technologies', [
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed', note: '', category: 'frontend' },
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'not-started', note: '', category: 'frontend' },
    { id: 3, title: 'State Management',description: 'Работа с состоянием компонентов', status: 'in-progress', note: '', category: 'frontend' }
  ]);

  const nextStatus = (s) => {
    switch (s) {
      case 'not-started':
        return 'in-progress'
      case 'in-progress':
        return 'completed'
      case 'completed':
        return 'not-started'
      default:
        return 'error'
    }
  }

  const updateStatus = (id, newStatus) => {
  setTechnologies(prev =>
    prev.map(t =>
      id === 'all'
        ? { ...t, status: newStatus }
        : t.id === id
          ? { ...t, status: newStatus === 'next' ? nextStatus(t.status) : newStatus }
          : t
    )
  );
};

  const updateNotes = (techId, newNotes) => {
    setTechnologies(prev => 
      prev.map(tech => 
        tech.id === techId ? { ...tech, notes: newNotes } : tech
      )
    );
  };

  const addTechnology = (newTech) => {
    setTechnologies(prev => [...prev, newTech]);
  };

  const deleteTechnology = (id) => {
    setTechnologies(prev => prev.filter(tech => tech.id !== id));
  };

  const calculateProgress = () => {
    if (technologies.length === 0) return 0;
    const completed = technologies.filter(tech => tech.status === 'completed').length;
    return Math.round((completed / technologies.length) * 100);
  };

  return {
    technologies,
    updateStatus,
    addTechnology,
    deleteTechnology
  };
}

export default useTechnologies;