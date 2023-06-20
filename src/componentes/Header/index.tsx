import { styled } from 'styled-components';
import logo from './assets/pokemon-logo.png';

const HeaderCustom = styled.header`
  width: 100%;
  padding: 10px 100px;
  background-color: #3d3c3c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoCustom = styled.img`
  width: 10%;
  height: 20%;
  margin: 15px;
`

const Buscador = styled.input`
  width: 15%;
  height: 50px;
  background-color: #d6d3d3;
  border: none;
  border-radius: 15px;
  margin-right: 5%;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #0a0a0a;
  text-align: center;
`

const Header = () => {
  return (
    <HeaderCustom>
      <LogoCustom src={logo} alt="logo do pokemon" />
      <Buscador type="text" name="buscador" placeholder="Nome do pokémon"/>
    </HeaderCustom>
  )
}

export default Header