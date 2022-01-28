//STYLES
import './NavBar.style.css';
import airbnbLogo from '../../images/airbnbLogo.png';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <img className='navBar__logo' src={airbnbLogo} alt='' />
    </nav>
  );
};

export default NavBar;