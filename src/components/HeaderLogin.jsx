import Logo from "../images/netflix-logo.png";
import styled from "styled-components";


const LogoN=styled.img`
width: 160px;
margin-top: 20px;
margin-left: 10%;
`;


function HeaderLogin() {
    

return(
    <LogoN src={Logo} alt="logo netflix"/>
    );

}



export default HeaderLogin;