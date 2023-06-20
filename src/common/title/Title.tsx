import { FC } from "react";

import { Box, Center } from "@chakra-ui/layout";

import { LogoType } from "util/icons/Icon";

export const Title: FC = () => {
    return (
        <Center w="full">
            <Box w="40%" data-aos="zoom-out" data-aos-duration="4000">
                <LogoType width="100%" />
            </Box>
        </Center>
    );
};
