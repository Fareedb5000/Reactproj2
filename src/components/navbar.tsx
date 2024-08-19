
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import CMS from "./CMS";
const Nav = () => {
  return (
    <HStack justifyContent={"space-between"}padding={'10px'}>
      <Image src={logo} boxSize={'60px'}></Image>
    <CMS/>
    </HStack>
  );
};

export default Nav