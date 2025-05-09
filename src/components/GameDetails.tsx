import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useSelectGameDetails from "../hooks/useSelectGameDetails";
import { useParams } from "react-router-dom";
import AddAttribute from "./AddAttribute";
import Score from "./Score";
import ExpandText from "./ExpandText";
import GameTrailer from "./GameTrailer";
import useSelectGameTrailer from "../hooks/useGameTrailer";
import useSelectScreenshootDetails from "../hooks/useScreenShot";
import GameScreenshot from "./GameScreenshot";
const GameDetails = () => {
  const { id } = useParams();
  const { games, loading, error } = useSelectGameDetails(id);
  const { trailer } = useSelectGameTrailer(games?.slug);
  const { screenshot } = useSelectScreenshootDetails(games?.id);
  if (error) return <div>{error.message}</div>;
  if (loading) return <Spinner />;
  return (
    <Box padding="10px">
      <Heading>{games?.name}</Heading>
      <ExpandText text={games?.description_raw} />
      <SimpleGrid columns={{ base: 2, lg: 3 }} marginTop="20px">
        <AddAttribute>
          <Text fontWeight="500" marginBottom="10px" marginTop="10px">
            Metacritic
          </Text>
          {Score(games)}
        </AddAttribute>
        <AddAttribute>
          <Text fontWeight="500" marginBottom="10px" marginTop="10px">
            Platform
          </Text>
          {games?.platforms.map(({ platform }) => (
            <Text key={platform.id} fontSize="14px">
              {platform.name}
            </Text>
          ))}
        </AddAttribute>
        <AddAttribute>
          <Text fontWeight="500" marginBottom="10px" marginTop="10px">
            Rating
          </Text>
          {games?.rating}
        </AddAttribute>
        <AddAttribute>
          <Text fontWeight="500" marginBottom="10px" marginTop="10px">
            Website
          </Text>
          <Link fontSize="14px" target="_blank" href={games?.website}>
            {" "}
            {games?.name}{" "}
          </Link>
        </AddAttribute>
      </SimpleGrid>
      <Box mt='20px'>
      <GameTrailer url={trailer?.results[0]?.data[480]} preview={trailer?.preview} />
      </Box>
      <SimpleGrid columns={{base: 1, md : 2}} gap='20px' mt='12px'>
      {screenshot?.results.map((item) => <Box key={item.id}><GameScreenshot url={item.image}/></Box>)}
      </SimpleGrid>
    </Box>
  );
};

export default GameDetails;
