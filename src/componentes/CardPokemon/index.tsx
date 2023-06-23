import { Card, CardActionArea, CardMedia, CardContent, Box, Typography } from "@mui/material"
import { typeHandler } from "../../utils/typeHandler"

interface Props {
  nome: string,
  imagem: string,
  tipos: any
}

const CardPokemon = ({nome, imagem, tipos}: Props) => {

  

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
              {typeHandler(tipos)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPokemon