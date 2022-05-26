import { useState } from "react";
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Progress,
  IconButton,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Container,
  Text,
} from "@chakra-ui/react";
import {
  IoPlayOutline,
  IoPauseOutline,
  IoCloseOutline,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import ReactPlayer from "react-player/youtube";
import Show from "@/animations/show";

const Index = ({ YouTubeId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [rePlay, setRePlay] = useState(false);
  const [progressVideoValue, setProgressVideoValue] = useState(0);

  const handlePlay = () => {
    onOpen();
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
        _focus={{ borderWidth: 3, borderColor: "#766df2" }}
      >
        {rePlay ? "Repeat movie" : "Play movie"}
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
                setProgressVideoValue(progress.playedSeconds);
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
              >
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={progressVideoValue}
                  _focus={{ borderWidth: 3, borderColor: "#766df2" }}
                  colorScheme='blue'
                >
                  <SliderTrack>
                    <SliderFilledTrack bg="#766df2"/>
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Show>
                  <HStack justifyContent="space-between">
                    <Text>{progressVideoValue}</Text>
                  </HStack>
                  <HStack spacing={1} justifyContent="center">
                    <IconButton
                      variant="ghost"
                      aria-label="Muted"
                      icon={
                        mute ? (
                          <IoVolumeMuteOutline size="22" />
                        ) : (
                          <IoVolumeHighOutline size="22" />
                        )
                      }
                      onClick={() => setMute(!mute)}
                      _focus={{ borderWidth: 3, borderColor: "#766df2" }}
                    />
                    <IconButton
                      variant="ghost"
                      aria-label="Play"
                      icon={
                        play ? (
                          <IoPauseOutline size="22" />
                        ) : (
                          <IoPlayOutline size="22" />
                        )
                      }
                      onClick={() => setPlay(!play)}
                      _focus={{ borderWidth: 3, borderColor: "#766df2" }}
                    />
                    <IconButton
                      variant="ghost"
                      aria-label="Play"
                      icon={<IoCloseOutline size="22" />}
                      onClick={handleClose}
                      _focus={{ borderWidth: 3, borderColor: "#766df2" }}
                    />
                  </HStack>
                </Show>
              </Container>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
