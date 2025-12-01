function QuickActions({ onUpdateStatus }) {
  return ( 
    <div className="quick-actions">
      <h3>Быстрые действия</h3>
      <div className="action-buttons" style={{marginBottom: '15px'}}>
        <button style={{background: '#4caf50'}} className='quick-btn' onClick={() => onUpdateStatus('all','completed')}>Отметить все как выполненные</button>
        <button style={{background: '#f44336'}} className='quick-btn' onClick={() => onUpdateStatus('all','not-started')}>Сбросить всё</button>
      </div>
    </div>
  );
}

export default QuickActions;
