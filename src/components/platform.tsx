import { Button, Menu, MenuRoot, Portal } from "@chakra-ui/react";
import { UsePlatforms } from "../hooks/usePlatform";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Gamestore from "../services/gameQuery";

const Platform = ( ) => {
  const [selectPlatform, setSelectPlatform] = useState<string | null>(null)
  const { platform, error } = UsePlatforms();
  if (error) return null;
  // console.log(platform);
  const setPlatform = Gamestore(s => s.setPlatform);

  return (
    <MenuRoot>
      <Menu.Trigger asChild mb={2} ml={{base: '20px' , md: "7px"}} >
        <Button outline='none' as='button' variant='outline' size="sm">
                {selectPlatform ===  null ? 'Platforms' : selectPlatform}  
                <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platform?.results.map((item) => (
              <Menu.Item key={item.id} onClick={()=> {setPlatform(item.id);setSelectPlatform(item.slug)}} mb='2px' cursor='pointer' value={item.name}>
                {item.slug}
               </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default Platform;
