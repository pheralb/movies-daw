import Tap from "@/animations/tap";
import { Tooltip, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const IconBtn = ({ title, icon, loading, disabled, onClick }) => {
  const bgTooltip = useColorModeValue("white.50", "dark.800");
  const color = useColorModeValue("gray.900", "gray.100");
  return (
    <Tap>
      <Tooltip label={title} bg={bgTooltip} color={color}>
        <IconButton
          variant="ghost"
          aria-label={title}
          icon={icon}
          onClick={onClick}
          isLoading={loading}
          isDisabled={disabled}
          _focus={{ borderWidth: 3, borderColor: "#FF0080" }}
          tabIndex={-1}
        />
      </Tooltip>
    </Tap>
  );
};

export default IconBtn;
