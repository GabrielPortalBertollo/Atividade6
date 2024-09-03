import styled from "styled-components";

const Container= styled.div`
background: linear-gradient(to bottom, #000000cf, #000000);
width: 80%;
margin-top: 2vh;
display: grid;
grid-template-columns: repeat(4, 1fr);
padding: 3% 10%;
`;

const SimpleDiv=styled.div`
align-items: center;
color: rgba(255, 255, 255, 0.7);
p{
    margin: 20px 0;
}

a:hover{
    cursor: pointer;
}
`;

const SimpleA=styled.a`
border-bottom: solid 1px rgba(255, 255, 255, 0.7);
`;


const NumberA=styled.a`
&:hover{
    border-bottom: solid 1px rgba(255, 255, 255, 0.7);
}

`;

const Select=styled.select`
color: white;
background: none;
border: 1px solid gray;
border-radius: 5px;
font-size: 1rem;
padding: 5px 10px;

option{
    color:black;
}

`;
const NumberP=styled.p`
font-size: 1.2rem;
`;





function Footer() {
    

    return(
        <Container>
            <SimpleDiv>
                <NumberP>Dúvidas? Ligue <NumberA>0800 591 2876</NumberA></NumberP>
                <p><SimpleA>Perguntas frequentes</SimpleA></p>
                <p><SimpleA>Preferências de cookies</SimpleA></p>
                <Select>
                        <option value="opcao1">Português</option>
                        <option value="opcao2">English</option>
                    </Select>
            </SimpleDiv>
            <SimpleDiv><p><SimpleA>Central de Ajuda</SimpleA></p> 
                       <p><SimpleA>Informações Corporativas</SimpleA></p> 
            </SimpleDiv>
            <SimpleDiv><p><SimpleA>Termos de Uso</SimpleA></p></SimpleDiv>
            <SimpleDiv><p><SimpleA>Privacidade</SimpleA></p></SimpleDiv>
        </Container>
    );
}

export default Footer;