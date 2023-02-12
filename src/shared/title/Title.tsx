import { FC } from "react";

import { Box, Center } from "@chakra-ui/layout";

import { ReactComponent as LogoType } from "assets/logotype.svg";

export const Title: FC = () => {
    return (
        <Center w="full">
            <Box w="50%">
                <LogoType width="100%" />
            </Box>
        </Center>
    );
};
