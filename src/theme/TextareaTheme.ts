import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const outline = defineStyle({
    borderRadius: 0, // remove the border radius
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "white",
    py: "4",
});

export const textareaTheme = defineStyleConfig({
    variants: { outline },
});
