import { Heading, Image, Link, List, ListItem } from "@chakra-ui/react";
import {useGenres } from "../hooks/useGenres"
import GenresSkeleton from "./GenresSkeleton";
import cropImage from "../services/cropImage";
import { useState } from "react";
import Gamestore from "../services/gameQuery";
export interface Props{
  UseQueryProps : ( id : number) => void
}
const Genres = () => {
 const {genres,loading} = useGenres();
 const [select,setSelect] = useState(0) 
 const cardData = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//  console.log(genres);
const setGenres = Gamestore(s => s.setGenres);
  return (
    <div>
      <Heading paddingLeft={5} mb={'10px'}>Genres</Heading>
        <List.Root w={'200px'} paddingLeft={5} >
        {loading && cardData.map((item) => (
            <GenresSkeleton key={item} />
        )) } 
        {genres?.results?.map((item)=> (
        <ListItem key={item.id}  display='flex' gap={3} marginBottom='10px' alignItems='center' cursor={'pointer'}>
        <Image borderRadius={10} boxSize={'40px'} src={cropImage(item.image_background)} alt='genres image' />
       <Link textWrap={'wrap'} fontWeight={`${select == item.id ? 'bold' : 'normal'}`}  onClick={()=>{ setGenres(item.id); setSelect(item.id)}} as='a' variant={'plain'}  fontSize='md'> {item.name} </Link>
       </ListItem>    
        ))}
        </List.Root>
    </div>
  )
}

export default Genres