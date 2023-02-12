import { FC } from "react";

import { Center, Container, Flex, Link, HStack } from "@chakra-ui/layout";

const Sections = [
    {
        id: "section-landing",
        label: "Home",
    },
    {
        id: "section-releases",
        label: "Releases",
    },
    {
        id: "section-about-me",
        label: "About me",
    },
    {
        id: "section-events",
        label: "Events",
    },
    {
        id: "section-contact",
        label: "Contact",
    },
];

export const Navbar: FC = () => {
    return (
        <Flex w="full" position="fixed" top="0" left="0" zIndex="1000">
            <Container bg="inherit" maxW="container.xl" p="4">
                <Center>
                    <HStack spacing="8">
                        {Sections.map((section) => (
                            <Link fontWeight="600" colorScheme="purple">
                                {section.label}
                            </Link>
                        ))}
                    </HStack>
                </Center>
            </Container>
        </Flex>
    );
};
