import { FC } from "react";

import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

import { ReleasesType } from "services/Data.api";
import {
    AppleIcon,
    PlayIcon,
    SpotifyIcon,
    TidalIcon,
    YoutubeIcon,
} from "util/icons/Icon";

interface Props {
    release: ReleasesType;
}

export const ListenNowMenu: FC<Props> = ({ release }) => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                variant="outline"
                mt="4"
                fontSize="xs"
                leftIcon={<PlayIcon />}
            >
                LISTEN NOW
            </MenuButton>
            <MenuList>
                <MenuItem icon={<AppleIcon />}>
                    <span>Apple Music</span>
                </MenuItem>
                <MenuItem icon={<SpotifyIcon />}>
                    <span>Spotify</span>
                </MenuItem>
                <MenuItem icon={<TidalIcon />}>
                    <span>Tidal</span>
                </MenuItem>
                <MenuItem icon={<YoutubeIcon />}>
                    <span>Youtube</span>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
