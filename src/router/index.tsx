import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import { Perfil } from '../pages/Perfil'
import { useState } from 'react'

const Router = () => {

  const [pokemonData, setPokemonData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setPokemonData={setPokemonData}/>}/>
        <Route path='/perfil' element={<Perfil pokemonData={pokemonData}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router