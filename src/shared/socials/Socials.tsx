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
}

export const Socials: FC<Props> = ({ orientation = "column", ...props }) => {
    return (
        <Flex
            className="socials"
            flexDirection={orientation}
            bg="gray.900"
            p={{ base: 0, md: 2 }}
            position={{ base: "relative", md: "fixed" }}
            bottom={{ base: "0", md: "16px" }}
            right={{ base: "0", md: "16px" }}
            gap="4"
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
