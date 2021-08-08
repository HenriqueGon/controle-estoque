import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <div className='navbar'>
        <Link to='#' className='logout'>
          <i className='fas fa-user'></i>
        </Link>
      </div>

      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          <li className='nav-name'>
            <h1>MyStock</h1>
          </li>
          
          {props.data ? props.data.map((item, index) => {
            return (
              <li key={index}
                className={item.className}>
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