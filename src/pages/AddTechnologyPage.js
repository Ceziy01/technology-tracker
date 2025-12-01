import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/AddTechnologyPage.css'

function AddTechnologyPage({ onAddTechnology }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('frontend');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Введите название технологии');
      return;
    }

    const newTechnology = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category,
      status: 'not-started',
      createdAt: new Date().toISOString()
    };

    onAddTechnology(newTechnology);
    navigate('/technologies');
  };

  return (
    <div className="page">
      <h1>Добавить новую технологию</h1>
      
      <form onSubmit={handleSubmit} className="add-tech-form">
        <div className="form-group">
          <label>Название технологии:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Например: React, Node.js, MongoDB"
            required
          />
        </div>

        <div className="form-group">
          <label>Описание:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Краткое описание технологии..."
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Категория:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">База данных</option>
            <option value="devops">DevOps</option>
            <option value="mobile">Мобильная разработка</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-add-technology">
            Добавить технологию
          </button>
          <button 
            type="button" 
            className="btn btn-cancel"
            onClick={() => navigate('/technologies')}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTechnologyPage;