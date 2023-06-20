import { FC } from "react";
import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";

import { Socials } from "common/socials/Socials";
import { UpIcon } from "util/icons/Icon";
import { scrollToSection, SectionIds } from "util/constants/Sections";

export const Footer: FC = () => {
    return (
        <Box py="32" pb="8">
            <Flex justifyContent="space-between" alignItems="center" w="100%">
                <div />
                <Socials orientation="row" />

                <Tooltip label="Scroll to top">
                    <IconButton
                        variant="ghost"
                        aria-label="down button"
                        size="lg"
                        icon={<UpIcon />}
                        onClick={() => {
                            scrollToSection(SectionIds.Landing);
                        }}
                    />
                </Tooltip>
            </Flex>
        </Box>
    );
};
