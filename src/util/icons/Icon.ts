import { createIcon } from "@chakra-ui/icons";

const ARROW_PATH =
    "m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z";

export const DownIcon = createIcon({
    displayName: "DownIcon",
    viewBox: "0 0 32 32",
    d: ARROW_PATH,
    defaultProps: {
        transform: "rotate(180deg)",
        fontSize: "2xl",
    },
});

export {
    BsSpotify as SpotifyIcon,
    BsApple as AppleIcon,
    BsInstagram as InstagramIcon,
} from "react-icons/bs";

export { HiOutlineMenu as MenuIcon } from "react-icons/hi";
