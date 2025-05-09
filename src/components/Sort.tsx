import { Button, Menu, MenuRoot, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Gamestore from "../services/gameQuery";

const Sort = () => {
  const setRelevant = Gamestore(s => s.setRelevant);

  const [selectSort, setSelectSort] = useState<string | null>(null);
  const sort = [
    { name: "-name", value: "Name" },
    { name: "-released", value: "Recent Released" },
    { name: "-added", value: "Recent Added" },
    { name: "-created", value: "Created At" },
    { name: "-updated", value: "Recent Updated" },
    { name: "rating", value: "Most Rated" },
    { name: "-metacritic", value: "Meta Score" }
  ];
  return (
    <MenuRoot>
      <Menu.Trigger asChild mb={2} ml="7px">
        <Button outline="none" as="button" variant="outline" size="sm">
        Sort By : {selectSort === null ? " Recent Added" : selectSort}
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sort.map((item) => (
              <Menu.Item key={item.name}
                onClick={() => {
                  setSelectSort(item.value);
                  setRelevant(item.name)
                }}
                mb="2px"
                cursor="pointer"
                value={item.name}
              >
                {item.value}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default Sort;
