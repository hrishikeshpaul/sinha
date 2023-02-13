import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";

import { Title } from "shared/title/Title";
import { DownIcon } from "util/icons/Icon";
import { scrollToSection, SectionIds } from "util/constants/Sections";

export const Landing: FC = () => {
    return (
        <Center className="landing" h="full" w="full" id={SectionIds.Landing}>
            <Title />
            <IconButton
                variant="ghost"
                aria-label="down button"
                position="absolute"
                bottom="18px"
                size="lg"
                icon={<DownIcon />}
                onClick={() => {
                    scrollToSection(SectionIds.Releases);
                }}
            />
        </Center>
    );
};
