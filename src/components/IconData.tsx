import { platform } from "../hooks/useGame";
import { Icon} from "@chakra-ui/react";
import { icon } from "../services/icon";
const IconData = (platform: platform) => {
const IconComponent = icon[platform.name];
if (!IconComponent) return null;
  return (
    <>
    <Icon as={IconComponent} fontSize={'30px'} color={'gray.300'}/>
    </>
  );
};

export default IconData;
