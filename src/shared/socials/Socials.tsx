import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";

import { AppleIcon, InstagramIcon, SpotifyIcon } from "util/icons/Icon";

export const Socials: FC = () => {
    return (
        <HStack
            className="social-link"
            position="fixed"
            bottom="16px"
            right="16px"
            spacing="0"
            display={{ base: "none", md: "flex" }}
        >
            <IconButton aria-label="apple-music-icon" icon={<AppleIcon />} />
            <IconButton aria-label="spotify-icon" icon={<SpotifyIcon />} />
            <IconButton aria-label="instagram-icon" icon={<InstagramIcon />} />
        </HStack>
    );
};
