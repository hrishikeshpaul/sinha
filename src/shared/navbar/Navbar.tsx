import { FC } from "react";

import { Center, Container, Flex, Link, HStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { Socials } from "shared/socials/Socials";
import { Sections } from "util/constants/Sections";

import { NavDrawer } from "./NavDrawer";

export const Navbar: FC = () => {
    const showNavDrawer = useBreakpointValue({ base: true, md: false });
    return (
        <Flex w="full" position="fixed" top="0" left="0" zIndex="1000">
            <Container bg="inherit" maxW="container.xl" p="4">
                <Center justifyContent={{ base: "flex-end", md: "center" }}>
                    <HStack spacing="8" display={{ base: "none", md: "flex" }}>
                        {Sections.map((section) => (
                            <Link
                                key={section.id}
                                fontWeight="600"
                                colorScheme="purple"
                            >
                                {section.label}
                            </Link>
                        ))}
                    </HStack>
                    {showNavDrawer && <Socials />}
                    {showNavDrawer && <NavDrawer />}
                </Center>
            </Container>
        </Flex>
    );
};
