import { useState } from "react";
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { IoPlayOutline, IoClose } from "react-icons/io5";
import ReactPlayer from "react-player/youtube";

const Index = ({ YouTubeId }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [rePlay, setRePlay] = useState(false);
  const [progressVideoValue, setProgressVideoValue] = useState(0);

  const handlePlay = () => {
    onOpen();
    setPlay(true);
  };

  const handleClose = () => {
    onClose();
    setPlay(false);
    setRePlay(false);
  };

  const finishMovie = () => {
    onClose();
    setPlay(false);
    setRePlay(true);
  };

  return (
    <>
      <Button
        mt="2"
        onClick={handlePlay}
        fontWeight="light"
        borderWidth="1px"
        leftIcon={<IoPlayOutline size="22" />}
        _focus={{ borderWidth: 3, borderColor: "purple.400" }}
        w={{ base: "100%", md: "auto" }}
      >
        {rePlay ? "Repeat trailer" : "Play trailer"}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="dark.900">
          <ModalBody p="0">
            <ReactPlayer
              width="100%"
              height="100vh"
              controls={false}
              playing={play}
              muted={mute}
              onProgress={(progress) => {
                setProgressVideoValue(progress.played);
              }}
              onEnded={finishMovie}
              url={`https://www.youtube.com/watch?v=${YouTubeId}`}
            />
            <Flex position="absolute" w="100%" bottom="0" right="0">
              <Container
                bg="dark.900"
                mb="2"
                borderRadius="5px"
                p="3"
                opacity="0.9"
                flexDirection="center"
                justifyContent="center"
              >
                <Button
                  w="100%"
                  variant="ghost"
                  borderWidth="1px"
                  fontWeight="light"
                  leftIcon={<IoClose />}
                  onClick={handleClose}
                >
                  Close trailer
                </Button>
              </Container>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
