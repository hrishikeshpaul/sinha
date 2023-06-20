import { FC } from "react";

import { Button } from "@chakra-ui/button";
import { Center, Container, Flex, HStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { Socials } from "common/socials/Socials";
import { MAX_WIDTH } from "util/constants/Layout";
import { scrollToSection, Sections } from "util/constants/Sections";

import { NavDrawer } from "./NavDrawer";

export const Navbar: FC = () => {
    const showNavDrawer = useBreakpointValue({ base: true, md: false });

    return (
        <Flex w="full" position="fixed" top="0" left="0" zIndex="1000">
            <Container
                bg="gray.900"
                maxW={MAX_WIDTH}
                px="4"
                py={{ base: "4", md: "1" }}
                data-aos="fade-down"
                data-aos-delay="500"
            >
                <Center
                    justifyContent={{ base: "flex-end", md: "center" }}
                    textTransform="uppercase"
                >
                    <HStack spacing="4" display={{ base: "none", md: "flex" }}>
                        {Sections.map((section) => (
                            <Button
                                variant="ghost"
                                key={section.id}
                                fontWeight="600"
                                textTransform="uppercase"
                                fontSize="sm"
                                onClick={() => {
                                    scrollToSection(section.id);
                                }}
                            >
                                {section.label}
                            </Button>
                        ))}
                    </HStack>
                    {
                        <Socials
                            orientation="row"
                            ml="4"
                            gap={{ base: "2", md: "0" }}
                        />
                    }
                    {showNavDrawer && <NavDrawer />}
                </Center>
            </Container>
        </Flex>
    );
};
