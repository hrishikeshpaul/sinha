import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
    list: {
        borderRadius: "0",
        border: "none",
        bg: "gray.800",
        p: "0",
    },
    item: {
        bg: "gray.800",
        py: "4",
        color: "white",
        fontWeight: "500",
        _hover: {
            bg: "gray.700",
        },
        _focus: {
            bg: "gray.700",
        },
    },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
