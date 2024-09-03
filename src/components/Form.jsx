import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Container=styled.div`
 display: grid;
            grid-template-columns: 1fr 1fr 1fr; /* Três colunas de tamanho igual */
            width: 100%;

`;

const Form=styled.form`
 grid-column: 2 / 3;
background-color: #000000cf;
border-radius: 5px;
display: flex;
flex-direction: column;
color: #8c8c8c;
padding: 3vw 5vw;
font-size: 1.2rem;
&>*{
    margin: 15px 0;
}
`;

const Title=styled.h1`
color: #fff;
`;

const Input=styled.input`
background: none;
border: solid 1px #8c8c8c;
border-radius: 5px;
padding: 20px;
font-size: 1.2rem;
color: #fff;
`;

const Enter=styled.button`
background-color: rgb(229, 9, 20);
font-size: 1.2rem;
color: #fff;
border: none;
border-radius: 5px;
padding: 10px 0;
cursor: pointer;
transition: 0.5s;
&:hover{
    background-color: rgb(180, 9, 20);
}
`;

const OU=styled.p`
text-align: center;
`;

const AcessCode=styled.button`
background-color: rgba(128, 128, 128, 0.4);
font-size: 1.2rem;
color: #fff;
border: none;
border-radius: 5px;
padding: 10px 0;
cursor: pointer;
transition: 0.5s;
&:hover{
    background-color: rgba(95, 95, 95, 0.4);
}
`;

const Esqueceu=styled.div`
display: flex;
justify-content: center;
color: #fff;

p:hover{
    color: #8c8c8c;
    border-bottom: solid 1px #8c8c8c;
}
`;

const Lembrar=styled.p`
color: #fff;
`;

const Assine=styled.a`
color:#fff;
&:hover{
    cursor:pointer;
    border-bottom: solid 1px #fff;
}

`;

const ReCaptchaText=styled.p`
font-size: 1rem;
`;
const Saiba=styled.a`
color: #0071eb;
&:hover{
border-bottom: solid 1px #0071eb;
cursor: pointer;
}
`;

const Erro=styled.p`
color: rgb(235, 57, 66);
font-size: 1rem;
`;

function LoginForm() {
const [login, setLogin]=useState("")
const [senha, setSenha]=useState("")
 const erro= login=="" || senha=="";

 const navigate=useNavigate();
 const logar= ()=>{
 navigate('/accounts')
 };



return(
    <Container>
<Form>
<Title>Entrar</Title>
<Input type="text"  placeholder="Email ou número de celular" onChange={(e)=>setLogin(e.target.value)}/>
{!login && <Erro>Informe um email ou número de telefone válido.</Erro>}

<Input type="text"  placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}/>
{!senha && <Erro>A senha deve ter entre 4 e 60 caracteres.</Erro>}

<Enter disabled={erro} onClick={logar} >Entrar</Enter>
<OU>OU</OU>
<AcessCode>Usar um código de acesso</AcessCode>
<Esqueceu><p>Esqueceu a senha?</p></Esqueceu>
<Lembrar><input type="checkbox" /> Lembre-se de mim</Lembrar>
<p>Novo por aqui? <Assine>Assine agora</Assine>.</p>
<ReCaptchaText>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <Saiba>Saiba mais.</Saiba></ReCaptchaText>


</Form>
</Container>

)

}

export default LoginForm