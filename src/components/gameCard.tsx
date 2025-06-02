import { Box, Card, Flex, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import IconData from "./IconData"
import Score from "./Score"
import cropImage from "../services/cropImage"
import RatingIcon from "./ratingIcon"
export const GameCard = ( games: Game) => {


  return (
    <Card.Root _hover={{scale : '1.01'}} transition='300ms ease-in' borderRadius='10px' overflow='hidden'>
      <Box w={'100%'} height={'200px'}>
      <Image
        src={cropImage(games.background_image)}
        h={'100%'}
        w={'100%'}
        objectFit={'cover'}
      />
      </Box> 
      <Card.Body gap="2" bg={'gray.950'}>
        <Flex justify={'space-between'}>
        <Card.Description w={{base: 'auto',lg:'300px'}} textAlign={'center'} display={'flex'} gap={2} flexWrap={'wrap'}>
            {games.platforms.map(({platform}) => (
              <IconData key={platform.id} {...platform} />
            ))}
        </Card.Description>
            <Score {...games} />
            </Flex>
            <Card.Title mt={'10px'} color={'gray.100'}>{games.name}</Card.Title>
            <RatingIcon rating={games.rating_top}/>
      </Card.Body>
    </Card.Root>
    
  )
}
