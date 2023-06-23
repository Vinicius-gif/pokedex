import { useEffect, useState } from "react";
import Header from "../componentes/Header"
import axios from "axios";
import { Container, Grid, Box } from "@mui/material";
import CardPokemon from "../componentes/CardPokemon";
import Skeletons from "../componentes/Skeletons";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Titulo = styled.h2`
  text-align: center;
  color: #e79428;
  margin: 10px;
  padding: 20px 0px;
  font-size: 300%;
`

function Home({setPokemonData} : any) {

  const [pokemons, setPokemons] = useState<any>([]);
  const navigate = useNavigate();

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemonFilter = (nomeDoPokemon: string) => {
    const pokemonsFiltrados = []
    if (nomeDoPokemon === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(nomeDoPokemon)) {
        pokemonsFiltrados.push(pokemons[i])
      }
    }
    setPokemons(pokemonsFiltrados)
  }

  const pokemonPickHandler = (pokemonData : any) => {
    setPokemonData(pokemonData)
    navigate('/perfil')
  }

  return (
    <>
      <Header pokemonFilter={pokemonFilter} />
      <Titulo>Minha Pokedéx</Titulo>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {
            pokemons.legth === 0 ?
              <Skeletons />
              :
              pokemons.map((pokemon: any) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.data.name}>
                  <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                    <CardPokemon
                      nome={pokemon.data.name}
                      imagem={pokemon.data.sprites.front_default}
                      tipos={pokemon.data.types}
                    />
                  </Box>
                </Grid>
              ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default Home
