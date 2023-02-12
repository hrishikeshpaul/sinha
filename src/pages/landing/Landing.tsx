import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";

import { Title } from "shared/title/Title";
import { DownIcon } from "util/icons/Icon";

export const Landing: FC = () => {
    return (
        <Center className="landing" h="full" w="full">
            <Title />
            <IconButton
                aria-label="down button"
                position="absolute"
                bottom="18px"
                icon={<DownIcon />}
            />
        </Center>
    );
};
