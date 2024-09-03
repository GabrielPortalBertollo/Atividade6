import styled from "styled-components";
import Logo from "../images/netflix-logo.png";


const Header= styled.header`
background-color: #000;
width: 100%;
position: fixed;
display: grid;
grid-template-columns: auto auto auto auto;
align-items: center;
z-index: 1;
`;

const LogoN=styled.img`
width: 100px;
margin-top: 20px;
margin-left: 40%;
float: left;
cursor:pointer;
`;

const Links=styled.ul`
float: left;
padding-top: 20px;
list-style: none;
padding-left: 0;

li{
    float:left;
    margin: 0 5px;
}
a:hover{
color:#8c8c8c;
cursor:pointer;
}
`;

//SNI=Search Notify Image
const SNI=styled.div`
display: flex;
align-items: center;
svg:hover{
    cursor:pointer;
}
img{
    border-radius: 4px;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    cursor:pointer;
}
p{
    cursor: pointer;
}
`;

const Input=styled.div`
display: flex;

svg{
    margin-right: 5px;
}
input{
    border:#fff;
    background-color: #000;
    color: #fff;
    padding: 5px;
    font-size: 1rem;
}
`;


function HeaderHome() {
    
    return(
        <Header>
        <LogoN src={Logo} alt="logo netflix"/>
        <Links>
        <li><a>Início</a></li>
        <li><a>Séries</a></li>
        <li><a>Filmes</a></li>
        <li><a>Bombando</a></li>
        <li><a>Minha lista</a></li>
        <li><a>Navegar por idiomas</a></li>
        </Links>
        <SNI>
        <Input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="MagnifyingGlassStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
        <input type="text" placeholder="Títulos, gente e gêneros" />
        </Input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="BellStandard" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
        <img src="https://occ-0-3980-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4" alt="Imagem do usuario" />
        <p>▼</p>
        </SNI>
        


        </Header>
    )
}


export default HeaderHome;