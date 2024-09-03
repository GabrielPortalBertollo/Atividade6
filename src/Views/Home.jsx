import styled from "styled-components";
import HomeFooter from "../components/HomeFooter";
import Header from "../components/Header";
import MovieList from "../components/Movies";

const Background=styled.div`
background-color: #000;
width: 100%;
min-height: 100vh;
color: #fff;
`;


function Home() {
    

    return(
        <Background>
            <Header></Header>
            <MovieList></MovieList>
            <HomeFooter></HomeFooter>
        </Background>

    )
}


export default Home;