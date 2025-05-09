import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameSkeleton = () => {
  return (
    <Card.Root>
        <Box height={'200px'}>
       <Skeleton w={'100%'} height="100%" />
      </Box> 
      <Card.Body gap="2" bg={'gray.950'}>
        <Card.Title w={'300px'} color={'gray.100'}>
        <SkeletonText noOfLines={2} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  )
}

export default GameSkeleton