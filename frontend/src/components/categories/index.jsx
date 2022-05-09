import React from "react";
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import useFetchData from "@/hooks/useFetchData";
import { IoAlbumsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Index = () => {
  const apiURL = import.meta.env.VITE_ALL_CATEGORIES;
  const { data: data, loading, error } = useFetchData(apiURL);
  const bg = useColorModeValue("white.50", "dark.800");

  if (error)
  
  return (
  <>
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        isLoading={loading}
        fontWeight="light"
        loadingText="Loading..."
        leftIcon={<IoAlbumsOutline />}
        isDisabled={error}
        _focus={{borderWidth: 3, borderColor: "#FF0080"}}
      >
        Categories
      </MenuButton>
    </Menu>
  </>)

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          isLoading={loading}
          fontWeight="light"
          loadingText="Loading..."
          leftIcon={<IoAlbumsOutline />}
          isDisabled={error}
          _focus={{borderWidth: 3, borderColor: "#FF0080"}}
        >
          Categories
        </MenuButton>
        <MenuList bg={bg}>
          {data?.map((category) => {
            return (
              <Link key={category} to={`/category/${category}`}>
                <MenuItem>{category}</MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default Index;
