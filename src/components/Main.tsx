// import { GameCard } from "./gameCard";
import { Box,SimpleGrid, Spinner } from "@chakra-ui/react";
import { useGame } from "../hooks/useGame";
import GameSkeleton from "./GameSkeleton";
import CardBox from "./CardBox";
import { GameCard } from "./gameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Gamestore from "../services/gameQuery";
import { Link } from "react-router-dom";
export const Main = ( ) => {
  const {gameQuery} = Gamestore();
  const { data, error,isFetching, fetchNextPage,hasNextPage } = useGame(gameQuery);
  const cardData = [1,2,3,4,5,6];


  const fetchGame = data?.pages.reduce((a,b) => a + b.results.length, 0) || 0;
  return (
    <Box w={'100%'}>
       {error && <p> {error.message}</p>}
       <InfiniteScroll
       dataLength={fetchGame}
       hasMore={hasNextPage}
       next={() =>fetchNextPage()}
       loader={<Spinner/>}>
      <SimpleGrid px={{ base: '20px',sm: "10px" }} columns={{ sm: 1, md: 3, lg: 3 }} gap={5}>
      {isFetching && cardData.map((item)=> (
        
       <CardBox  key={item}> <GameSkeleton /> </CardBox>
       )) }
          {data?.pages.map((items)=> items.results.map((item) =><Link key={item.id} to={`game/${item.slug}`}> <GameCard {...item}/> </Link>)) } 
      </SimpleGrid>
      </InfiniteScroll>
      {/* <Button ml='10px' mt='10px' disabled={isFetching} onClick={() => fetchNextPage()}>Load More</Button> */}
    </Box>
  );
};
