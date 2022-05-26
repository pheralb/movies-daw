import React from "react";
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Icon,
  useColorModeValue,
  IconButton,
  Tooltip,
  MenuGroup,
  Spinner,
  HStack,
  Text,
} from "@chakra-ui/react";
import useFetchData from "@/hooks/useFetchData";
import { IoAlbumsOutline, IoWarningSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tap from "@/animations/tap";

const Index = () => {
  const apiURL = import.meta.env.VITE_ALL_CATEGORIES;
  const { data: data, loading, error } = useFetchData(apiURL);
  const bg = useColorModeValue("white.50", "dark.800");
  const color = useColorModeValue("gray.900", "gray.100");
  if (loading) {
    return <Spinner />;
  }

  if (error)
    return (
      <>
        <HStack mr="2" borderWidth="1px" borderRadius="10px" p="2">
          <Icon as={IoWarningSharp} size="22" color="red.500" />
          <Text color="red.500">Error</Text>
        </HStack>
      </>
    );

  return (
    <>
        <Menu>
          <Tap>
            <Tooltip label="Categories" bg={bg} color={color}>
              <MenuButton
                as={IconButton}
                variant="ghost"
                fontWeight="light"
                icon={<IoAlbumsOutline size="22" />}
                isDisabled={error}
                _focus={{ borderWidth: 3, borderColor: "purple.400" }}
              />
            </Tooltip>
          </Tap>
          <MenuList bg={bg}>
            <MenuGroup title="Categories:">
              {data?.map((category) => {
                return (
                  <Link key={category} to={`/category/${category}`}>
                    <MenuItem>{category}</MenuItem>
                  </Link>
                );
              })}
            </MenuGroup>
          </MenuList>
        </Menu>
    </>
  );
};

export default Index;
