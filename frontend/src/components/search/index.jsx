import React from "react";
import {
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputLeftElement,
  InputGroup,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import Tap from "@/animations/tap";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white.50", "dark.800");
  return (
    <>
      <Tap>
        <IconButton
          variant="ghost"
          aria-label="Search films"
          icon={<IoSearchOutline size="22" />}
          onClick={onOpen}
        />
      </Tap>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg={bg} borderWidth="1px">
          <ModalHeader fontWeight="light">Search movies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                mt="1"
                children={<IoSearchOutline size="22" />}
              />
              <Input
                borderWidth="1px"
                placeholder="Search movies..."
                size="lg"
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              fontWeight="light"
              borderWidth="1px"
              onClick={onClose}
              leftIcon={<IoCloseOutline size="22" />}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
