import {
    extendTheme,
    type ThemeConfig,
    Colors,
    StyleProps,
} from "@chakra-ui/react";
import { inputTheme } from "./InputTheme";
import { menuTheme } from "./MenuTheme";
import { textareaTheme } from "./TextareaTheme";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    cssVarPrefix: "sinha",
};

const colors: Colors = {
    gray: {
        50: "#dfdfdf",
        100: "#d2d2d2",
        200: "#c6c6c6",
        300: "#acacac",
        400: "#939393",
        500: "#797979",
        600: "#606060",
        700: "#464646",
        800: "#2d2d2d",
        900: "#131313",
    },
};

const styles = {
    global: () => ({
        body: {
            bg: "gray.900",
            color: "white",
        } as StyleProps,
    }),
};

const components = {
    Button: {
        defaultProps: {
            variant: "outline",
        },
        baseStyle: {
            borderRadius: 0,
            textTransform: "uppercase",
        },
        variants: {
            outline: () => {
                return {
                    _active: {
                        color: "gray.900",
                    },
                    _hover: {
                        bg: "white",
                        borderColor: "white",
                        color: "gray.900",
                    },
                };
            },
            ghost: () => {
                return {
                    _hover: {
                        bg: "white",
                        borderColor: "white",
                        color: "gray.900",
                    },
                };
            },
            big: (props: any) => {
                return {
                    ...props.theme.components.Button.variants.outline(props),
                    py: "8",
                    px: "8",
                };
            },
        },
    },
    Menu: menuTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
};

const theme = extendTheme({ config, colors, styles, components });

export default theme;
