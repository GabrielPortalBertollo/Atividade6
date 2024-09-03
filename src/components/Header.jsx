import { useLocation  } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import HeaderHome from './HeaderHome';



function Header() {
    
const location= useLocation();
return(
  <>
  {location.pathname === '/' && <HeaderLogin/>}
  {location.pathname === '/home' && <HeaderHome/>}
  </>
    );

}



export default Header