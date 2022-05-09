import React from "react";
import { IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import Tap from "@/animations/tap";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const iconMode = useColorModeValue(
    <IoSunnyOutline size="22" />,
    <IoMoonOutline size="22" />
  );

  function toggleMode() {
    toggleColorMode();
  }

  return (
    <Tap>
      <Tooltip label="Change theme">
        <IconButton
          variant="ghost"
          aria-label="Toggle mode"
          onClick={toggleMode}
          icon={iconMode}
          _focus={{borderWidth: 3, borderColor: "#FF0080"}}
        />
      </Tooltip>
    </Tap>
  );
};

export default Index;
