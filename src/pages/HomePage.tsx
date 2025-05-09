import { Grid, GridItem, Heading, HStack } from "@chakra-ui/react"
import Genres from "../components/Genres"
import Platform from "../components/platform"
import Sort from "../components/Sort"
import { Main } from "../components/Main"
import { useGenres } from "../hooks/useGenres"
import { UsePlatforms } from "../hooks/usePlatform"
import Gamestore from "../services/gameQuery"

const HomePage = () => {
    const {genres} = useGenres();
    const {platform} = UsePlatforms();
    const {gameQuery} = Gamestore();
  return (
    <Grid templateAreas={{base: `"main"`, md:`"aside main"`}}>
    
    <GridItem  display={{base: 'none', md: 'block'}} area={'aside'}>
      <Genres/>
    </GridItem> 
    
    <GridItem mb={'10px'} area={'main'}>
      <Heading mb={'10px'} ml={'10px'}>{gameQuery.getPlatformId ? platform?.results.map(item => item.id == gameQuery.getPlatformId ? item.name: '' ) : '' } {gameQuery.getGenresId ? genres?.results.map((item) => item.id == gameQuery.getGenresId ? item.name : '')  : '' } Game</Heading>
      <HStack>
      <Platform/>
      <Sort  />
    </HStack>
      <Main/>
    </GridItem>  
    </Grid>
  )
}

export default HomePage