import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";

import { Title } from "common/title/Title";
import { DownIcon } from "util/icons/Icon";
import { scrollToSection, SectionIds } from "util/constants/Sections";

export const Landing: FC = () => {
    return (
        <Center className="landing" h="full" w="full" id={SectionIds.Landing}>
            <Title />
            <IconButton
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                variant="ghost"
                aria-label="down button"
                position="absolute"
                bottom="18px"
                size="lg"
                icon={<DownIcon />}
                onClick={() => {
                    scrollToSection(SectionIds.Music);
                }}
            />
        </Center>
    );
};
