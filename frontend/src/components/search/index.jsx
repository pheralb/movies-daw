import React, { useRef, useState } from "react";
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
  Tooltip,
} from "@chakra-ui/react";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import Tap from "@/animations/tap";
import { useNavigate } from "react-router-dom";
import IconBtn from "@/components/buttons/iconBtn";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const [txtSearch, setTxtSearch] = useState("");
  const bg = useColorModeValue("white.50", "dark.800");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onClose();
    navigate(`/search/${txtSearch}`);
  };

  return (
    <>
      <IconBtn
        title="Search"
        icon={<IoSearchOutline size="22" />}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={bg} borderWidth="1px">
          <ModalHeader fontWeight="light">Search movies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSearch}>
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
                  ref={initialRef}
                  value={txtSearch}
                  onChange={(e) => setTxtSearch(e.target.value)}
                  _focus={{ borderWidth: 3, borderColor: "#766df2" }}
                />
              </InputGroup>
            </form>
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
