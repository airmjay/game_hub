import { IconType } from "react-icons";
import { FaApple, FaLinux, FaWindows, FaXbox } from "react-icons/fa";
import { RiXboxLine } from "react-icons/ri";
import { BsXbox } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import {
  SiNintendogamecube,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita,
} from "react-icons/si";

export const icon: { [key: string]: IconType} = {
    "PC" : FaWindows,
    "Xbox One": FaXbox ,
    "Xbox 360": RiXboxLine ,
    "PlayStation 3": SiPlaystation3 ,
    "PlayStation 4": SiPlaystation4 ,
    "PlayStation 5": SiPlaystation5 ,
    "Xbox Series S/X": BsXbox ,
    "macOS": FaApple ,
    "Linux" : FaLinux ,
    "Nintendo Switch": SiNintendogamecube ,
    "Android": IoLogoAndroid ,
    "PS Vita": SiPlaystationvita ,
  };