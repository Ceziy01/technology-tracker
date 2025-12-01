import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css'

function Navigation({isLoggedIn, username, handleLogout}) {
    const location = useLocation();

    

    function getLink(link, name) {
      return (<Link 
          to={link} 
          className={location.pathname === link ? 'active' : ''}>{name}
        </Link>)
    };

    return (
        <nav className='main-navigation'>
            <div className='nav-brand'>
                <Link to='/'>
                    <h2>Трекер технологий</h2>
                </Link>
            </div>
            <ul className="nav-menu">
              <li>{getLink('/', 'Главная')}</li>
              <li>{getLink('/technologies', 'Технологии')}</li>
              <li>{getLink('/add-technology', 'Добавить технологию')}</li>
              <li>{getLink('/stats', 'Статистика')}</li>
              {isLoggedIn ? (
              <>
                <li>{getLink('/settings', 'Найстройки')}</li>
                <li className="user-info">
                  <span>Привет, {username}!</span>
                  <button onClick={handleLogout} className="logout-btn">Выйти</button>
                </li>
              </>
            ) : (
              <li><Link to="/login">Войти</Link></li>
            )}
            </ul>
        </nav>
    )
}

export default Navigation;