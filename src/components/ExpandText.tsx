import { Box, Button } from "@chakra-ui/react"
import { useState } from "react";


const ExpandText = ({text} : {text?: string}) => {
    const [expand, setExpand] = useState(false);
    const limit = 300;
    
    if(!expand && text) { text = text.substring(0, limit)+ '...' }
   
  return (
    <Box>
        {text}
        <Button ml='20px' size='xs' bg='yellow.300' onClick={() => setExpand(!expand)}>Read More</Button>
    </Box>
  )
}

export default ExpandText