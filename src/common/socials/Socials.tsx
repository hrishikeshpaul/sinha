import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { Flex, FlexProps } from "@chakra-ui/layout";

import {
    AppleIcon,
    InstagramIcon,
    SpotifyIcon,
    TidalIcon,
    YoutubeIcon,
} from "util/icons/Icon";

import "./Socials.scss";
import { Tooltip } from "@chakra-ui/react";

interface Props extends FlexProps {
    orientation?: "row" | "column";
    isAboslute?: boolean;
}

export const Socials: FC<Props> = ({
    orientation = "column",
    isAboslute = true,
    ...props
}) => {
    return (
        <Flex
            className="socials"
            flexDirection={orientation}
            p={{ base: 0, md: 2 }}
            gap="4"
            zIndex={999}
            {...props}
        >
            <Tooltip
                label="Apple Music"
                placement={orientation === "row" ? "bottom" : "left"}
            >
                <IconButton
                    size={{ base: "md", md: "lg" }}
                    aria-label="apple-music-icon"
                    icon={<AppleIcon />}
                />
            </Tooltip>
            <Tooltip
                label="Instagram"
                placement={orientation === "row" ? "bottom" : "left"}
            >
                <IconButton
                    size={{ base: "md", md: "lg" }}
                    aria-label="instagram-icon"
                    icon={<InstagramIcon />}
                />
            </Tooltip>
            <Tooltip
                label="Spotify"
                placement={orientation === "row" ? "bottom" : "left"}
            >
                <IconButton
                    size={{ base: "md", md: "lg" }}
                    aria-label="spotify-icon"
                    icon={<SpotifyIcon />}
                />
            </Tooltip>
            <Tooltip
                label="Tidal"
                placement={orientation === "row" ? "bottom" : "left"}
            >
                <IconButton
                    size={{ base: "md", md: "lg" }}
                    aria-label="tidal-icon"
                    icon={<TidalIcon />}
                />
            </Tooltip>
            <Tooltip
                label="Youtube"
                placement={orientation === "row" ? "bottom" : "left"}
            >
                <IconButton
                    size={{ base: "md", md: "lg" }}
                    aria-label="youtube-icon"
                    icon={<YoutubeIcon />}
                />
            </Tooltip>
        </Flex>
    );
};
