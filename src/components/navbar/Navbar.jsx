import { Link } from 'react-router-dom';
import { imgNav } from './navBar.module.css';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body' data-bs-theme='dark'>
      <div className='container-fluid'>
        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" className={imgNav} alt="Logo navbar" />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to={'/'}>Go to Home</Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Categories 
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link to={'/people'} className='dropdown-item'>People</Link>
                </li>
                <li>
                  <Link to={'/vehicles'} className='dropdown-item'>Vehicles</Link>
                </li>
                <li>
                  <Link to={'/films'} className='dropdown-item'>Films</Link>
                </li>
                <li>
                  <Link to={'/planets'} className='dropdown-item'>Planets</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
