import { RatingGroup } from "@chakra-ui/react"
interface Props{
    rating : number;
}
const RatingIcon = ({rating}: Props) => {
  const rate = rating === 0 ? 1 : rating  
  return (
    <RatingGroup.Root color={'white'}
        colorPalette="green"
        readOnly
        count={rate}
        // defaultValue={3}
        size="xs"
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      
      </RatingGroup.Root>
  )
}

export default RatingIcon