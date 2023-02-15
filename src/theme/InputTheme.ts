import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
    field: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'white',
        borderRadius: '0',
        py: "6",
    },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
