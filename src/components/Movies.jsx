//chave da api: b33ad6c93c0c36138dddc8bb3a163aad

//token de leitura da api: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzNhZDZjOTNjMGMzNjEzOGRkZGM4YmIzYTE2M2FhZCIsIm5iZiI6MTcyNTIxMjA3OC45NDUzNDMsInN1YiI6IjY2ZDRhNGIwNGUxOWUxNzBmMzMwMDQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PEU15RmIg3_oh54stxl7UlMuzxb_xUrPKyVcrGHsEL0
import { useState, useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import styled from 'styled-components';
import axios from 'axios';
import "../Styles/movies.css"

const Margem = styled.div`
  padding-top: 150px;
  h2{
    margin-left: 60px;
  }
`;

const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5); // Ajuste a transparência aqui
  border: none;
  color: white;
  cursor: pointer;
  position: absolute; // Posicionamento absoluto
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; // Certifique-se de que os botões estão acima do conteúdo
  height: 100%;
  padding: 0 20px;
  font-size: 2rem;
  text-align: center;
`;

const MovieDiv=styled.div`
cursor:pointer;
transition:0.3s;

&:hover{
  transform: scale(1.1);
}
`;


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  p{
    color:#8c8c8c
  }
  h2{
    color:#fff;
  }
`;

const CloseButton = styled.button`
  background-color: rgb(229, 9, 20);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  float: right;
`;



const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  return(
  <ArrowButton disabled={isFirstItemVisible} onClick={() => scrollPrev()} style={{ left: '0' }}>
    &lt;
  </ArrowButton>
  )
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  return(
  <ArrowButton disabled={isLastItemVisible} onClick={() => scrollNext()} style={{ right: '0' }}>
    &gt;
  </ArrowButton>
  )
};


const apiKey = 'b33ad6c93c0c36138dddc8bb3a163aad';
const baseUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const fetchMoviesByGenre = async (genreId) => {
  const response = await axios.get(`${baseUrl}/discover/movie`, {
    params: {
      api_key: apiKey,
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  return response.data.results;
};

const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
    params: {
      api_key: apiKey,
      language: 'pt-BR',
    },
  });
  return response.data.cast;
};

const MovieList = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [sciFiMovies, setSciFiMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getMovies = async () => {
    const comedy = await fetchMoviesByGenre(35); // ID do gênero Comédia
    const action = await fetchMoviesByGenre(28); // ID do gênero Ação
    const drama = await fetchMoviesByGenre(18); // ID do gênero Drama
    const horror = await fetchMoviesByGenre(27); // ID do gênero Terror
    const sciFi = await fetchMoviesByGenre(878); // ID do gênero Ficção Científica
    setComedyMovies(comedy);
    setActionMovies(action);
    setDramaMovies(drama);
    setHorrorMovies(horror);
    setSciFiMovies(sciFi);
  };

  const openModal = async(movie) => {
    const cast = await fetchMovieCredits(movie.id);
    setSelectedMovie({ ...movie, credits: { cast } });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };

  function buildMovies(type) {
    return(
      <div style={{ position: 'relative' }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {type.map((movie, index) => (
          <MovieDiv key={movie.id} style={{marginLeft: index === 0 ? '0' : '10px',marginRight: index === type.length - 1 ? '0' : '10px'}} onClick={() => openModal(movie)}>
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} style={{ width: '200px' }} />
          </MovieDiv>
        ))}
      </ScrollMenu>
      </div>
    );
  }


  getMovies();

  return (
    <Margem>
      <h2>Filmes de Comédia</h2>
      {buildMovies(comedyMovies)}

      <h2>Filmes de Ação</h2>
      {buildMovies(actionMovies)}

      <h2>Filmes de Drama</h2>
      {buildMovies(dramaMovies)}

      <h2>Filmes de Terror</h2>
      {buildMovies(horrorMovies)}

      <h2>Filmes Ficção</h2>
      {buildMovies(sciFiMovies)}
      {modalIsOpen && (
        <ModalBackground onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>X</CloseButton>
            {selectedMovie && (
              <>
                <h2>{selectedMovie.title}</h2>
                <p>{selectedMovie.overview}</p>
                <p><strong>Avaliação:</strong> {selectedMovie.vote_average}</p>
                <p><strong>Data de Lançamento:</strong> {selectedMovie.release_date}</p>
                <p><strong>Elenco:</strong> {selectedMovie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
              </>
            )}
          </ModalContent>
        </ModalBackground>
      )}
    </Margem>
  );
};

export default MovieList;

