import {
  ClientOnly,
  IconButton,
  Input,
  InputGroup,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/img/mylogo.png";
import { BiSearchAlt } from "react-icons/bi";
import { useRef, useState } from "react";
// import { UseQuery } from "../App";
import Gamestore from "../services/gameQuery";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const searchGame = Gamestore(s => s.searchGame);
  const { toggleColorMode, colorMode } = useColorMode();
  const navigate = useNavigate();
  const [colorModeText, setColorModeText] = useState(false);
  const search = useRef<HTMLInputElement>(null);
  return (
    <HStack mb="20px" paddingLeft={5} paddingRight={3} paddingY={2}>
      <Link to='/'>
      <Image src={logo} width='50px' height='50px' /></Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search.current) {
            searchGame(search.current?.value);
            navigate('/');
          }else{
            searchGame('');
          }
        }}
      > 
        <InputGroup startElement={<BiSearchAlt />}>
          <Input
            ref={search}
            borderRadius={"20px"}
            placeholder="search for game....."
          />
        </InputGroup>
      </form>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={() => {
            toggleColorMode();
            setColorModeText(!colorModeText);
          }}
          variant="outline"
          size="sm"
        >
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Text display={{base: 'none',lg: 'block'}} textWrap={"nowrap"}>
          {colorModeText ? "Dark Mode" : "Light Mode"}
        </Text>
      </ClientOnly>
    </HStack>
  );
};
