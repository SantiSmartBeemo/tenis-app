import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme({ config },{
    styles:{
        global: () => ({
            body: {
                fontFamily: "body",
                color: "gray.800",
                bg: "#1C2833",
                lineHeight: "base",
            },
        }),
    },
    brand: {
      900: '#1C2833 ',
      800: '#153e75',
      700: '#2a69ac',
    },
    test: {
      900: '#4a165d',
      800: '#453e75',
      700: '#4a69ac',
    },
});