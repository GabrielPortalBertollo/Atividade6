import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Background=styled.main`
width: 100%;
min-height: 100vh;
background-color: #000;
`;

const Title=styled.h1`
color: #fff;
text-align: center;
font-size: 3rem;
margin-top: 0;
padding-top: 200px;
`;

const AccountsFlex=styled.div`
display: flex;
justify-content: center;
`;

const AccountDiv=styled.div`
margin: 0 10px;
p{
color: grey;
text-align: center;
font-size: 1.5rem;
}

&:hover{
    cursor: pointer;
    p{
        color: #fff;
    }
    img{
        border: 5px solid #fff;
    }
}

`;
const AccountImg=styled.img`
width: 150px;
border-radius: 5px;
`;

const ManageProfile=styled.div`
margin-top: 100px;
color: gray;
display: flex;
justify-content: center;
font-size: 2rem;
p{
    border: solid 1px gray;
    padding: 15px 35px;
}
p:hover{
    border-color: #fff;
    color: #fff;
    cursor: pointer;
}
`;


function Accounts() {
 
    const navigate=useNavigate();
 const selecionar= ()=>{
 navigate('/home')
    };

    return(
        <Background>
            <Title>Quem está assistindo?</Title>
            <AccountsFlex>
                <AccountDiv onClick={selecionar}>
                    <AccountImg src="https://occ-0-3980-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4" alt="Imagem usuário" />
                    <p>Edu</p>
                </AccountDiv>
                <AccountDiv onClick={selecionar}>
                    <AccountImg src="https://occ-0-3980-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4" alt="Imagem usuário" />
                    <p>Jaques</p>
                </AccountDiv>
            </AccountsFlex>
            <ManageProfile><p>Gerenciar perfis</p></ManageProfile>
            
        </Background>
    )
}




export default Accounts;