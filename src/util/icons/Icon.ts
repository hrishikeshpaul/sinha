import { createIcon } from "@chakra-ui/icons";

export { ReactComponent as LogoType } from "assets/logotype.svg";

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

export const RightIcon = createIcon({
    displayName: "RightIcon",
    viewBox: "0 0 32 32",
    d: ARROW_PATH,
    defaultProps: {
        transform: "rotate(90deg)",
        fontSize: "2xl",
    },
});

export const LeftIcon = createIcon({
    displayName: "LeftIcon",
    viewBox: "0 0 32 32",
    d: ARROW_PATH,
    defaultProps: {
        transform: "rotate(-90deg)",
        fontSize: "2xl",
    },
});

export {
    BsSpotify as SpotifyIcon,
    BsApple as AppleIcon,
    BsInstagram as InstagramIcon,
    BsYoutube as YoutubeIcon,
    BsPlayFill as PlayIcon,
} from "react-icons/bs";

export { HiOutlineMenu as MenuIcon } from "react-icons/hi";

export { IoIosClose as CloseIcon } from "react-icons/io";

export { SiTidal as TidalIcon } from "react-icons/si";

export { MdOutlineOndemandVideo as VideoIcon } from "react-icons/md";
