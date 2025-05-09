import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

const AddAttribute = ( {children} : { children : ReactNode | ReactNode[]} ) => {
  return (
    <Box>
        <dd>{children}</dd>
    </Box>
  )
}

export default AddAttribute