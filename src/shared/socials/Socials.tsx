import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { Flex, FlexProps } from "@chakra-ui/layout";

import { AppleIcon, InstagramIcon, SpotifyIcon } from "util/icons/Icon";

interface Props extends FlexProps {
    orientation?: "row" | "column";
}

export const Socials: FC<Props> = ({ orientation = "column", ...props }) => {
    return (
        <Flex
            flexDirection={orientation}
            className="social-link"
            bg="gray.900"
            p={{ base: 0, md: 2 }}
            position={{ base: "relative", md: "fixed" }}
            bottom={{ base: "0", md: "16px" }}
            right={{ base: "0", md: "16px" }}
            gap="4"
            {...props}
        >
            <IconButton
                size={{ base: "md", md: "lg" }}
                aria-label="apple-music-icon"
                icon={<AppleIcon />}
            />
            <IconButton
                size={{ base: "md", md: "lg" }}
                aria-label="spotify-icon"
                icon={<SpotifyIcon />}
            />
            <IconButton
                size={{ base: "md", md: "lg" }}
                aria-label="instagram-icon"
                icon={<InstagramIcon />}
            />
        </Flex>
    );
};
