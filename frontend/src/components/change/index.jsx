import React from "react";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import IconBtn from "@/components/buttons/iconBtn";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const iconMode = useColorModeValue(
    <IoMoonOutline size="22" />,
    <IoSunnyOutline size="22" />
  );
  const key = useColorModeValue("Dark", "Light");

  function toggleMode() {
    toggleColorMode();
  }

  return (
    <>
      <IconBtn title={`${key} theme`} icon={iconMode} onClick={toggleMode} />
    </>
  );
};

export default Index;
