import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props{
    children : ReactNode;
}
export default function CardBox({children }: Props){
  return (
    <Box borderRadius={'10px'} w={'100%'} overflow="hidden" _hover={{scale: '0.97'}} >
     {children}
    </Box>
  )
}