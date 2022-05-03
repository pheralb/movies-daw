import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    white: {
      50: "#FDFDFC",
    },
    dark: {
      50: "#f7f7f7",
      800: "#121212",
      900: "#000000",
    },
    blue: {
      50: "#edf8ff",
      900: "#0d439b",
    },
    pink: {
      100: "#A531DC",
    },
    purple: {
      600: "#8014ff",
      800: "#4300B1",
      900: "#5103af",
    },
  },
  fonts: {
    body: "Inter-Regular",
    heading: "Inter-Semibold",
    mono: "Menlo, monospace",
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.800", "gray.300")(props),
        bg: mode(
          "white.50",
          "dark.800"
        )(props),
      },
    }),
  },
});

export default theme;
