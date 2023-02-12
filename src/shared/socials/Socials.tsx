import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { HStack, StackProps } from "@chakra-ui/layout";

import { AppleIcon, InstagramIcon, SpotifyIcon } from "util/icons/Icon";

export const Socials: FC<StackProps> = ({ ...props }) => {
    return (
        <HStack
            className="social-link"
            bg="gray.900"
            p={{ base: 0, md: 2 }}
            position={{ base: "relative", md: "fixed" }}
            bottom={{ base: "0", md: "16px" }}
            right={{ base: "0", md: "16px" }}
            spacing="0"
            {...props}
        >
            <IconButton
                size="lg"
                aria-label="apple-music-icon"
                icon={<AppleIcon />}
            />
            <IconButton
                size="lg"
                aria-label="spotify-icon"
                icon={<SpotifyIcon />}
            />
            <IconButton
                size="lg"
                aria-label="instagram-icon"
                icon={<InstagramIcon />}
            />
        </HStack>
    );
};
