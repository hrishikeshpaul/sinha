import { FC } from "react";

import { Box, Center } from "@chakra-ui/layout";

import { Title } from "shared/title/Title";
import { DownIcon } from "util/icons/Icon";

export const Landing: FC = () => {
    return (
        <Center className="landing" h="full" w="full">
            <Title />
            <Box position="absolute" bottom="32px">
                <DownIcon />
            </Box>
        </Center>
    );
};
