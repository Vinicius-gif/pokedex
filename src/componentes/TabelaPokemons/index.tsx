import axios from 'axios';
import { useEffect, useState } from 'react';

const TabelaPokemons = () => {
  
  const [pokemons, setPokemons] = useState<any>([]);

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

  return (
    <div>
      <ul>
      {pokemons.map((pokemon: any) => (
        <li key={pokemon.data.name}>{pokemon.data.name}</li>
      ))}
      </ul>
    </div>

  )
}

export default TabelaPokemons