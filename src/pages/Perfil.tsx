import Header from "../componentes/Header"
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../componentes/PokemonTable";

export const Perfil = ({pokemonData}: any) => {
  console.log(pokemonData);
  
  const { name, sprites, moves } = pokemonData
  
  return (
    <>
      <Header hideSearch={false}/>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{name}</Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box component="img" src={sprites.front_default} width="50%" height="100%" />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box display="flex" justifyContent="space-between">
                <Box component="img" src={sprites.front_female} width="25%" height="25%" />
                <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
                <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
              </Box>
              <Divider>Ataques</Divider>
              <Box textAlign="center" marginTop="15px">
                {moves.map((moveData : any, key : number) => (
                  <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
