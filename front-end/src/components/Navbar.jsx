import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <div className='navbar'>
        <div className='itens'>
          <Link to='/login'>
            <i className='fas fa-user-circle'></i>
          </Link>
        </div>
      </div>

      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          <li className='nav-name'>
            <h1>MyStock</h1>
          </li>
          
          {props.data ? props.data.map((item, index) => {
            return (
              <li key={index}
                className='nav-text'>
                  <Link to={item.path}>
                    <i className={item.icon}></i>
                    <span> {item.title} </span>
                  </Link>
              </li>
            );
          })
          : null}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;