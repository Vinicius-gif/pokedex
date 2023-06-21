import { Card, CardActionArea, CardMedia, CardContent, Box, Typography } from "@mui/material"

interface Props {
  nome: string,
  imagem: string,
  tipos: any
}

const CardPokemon = ({nome, imagem, tipos}: Props) => {

  const typeHandler = () => {
    if (tipos[1]) {
      return tipos[0].type.name + " | " + tipos[1].type.name;
    }
    return tipos[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imagem} alt="pokemon" />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {nome}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPokemon