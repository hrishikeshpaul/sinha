import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, VStack, Link } from "@chakra-ui/layout";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";

import { Socials } from "shared/socials/Socials";
import { CloseIcon, LogoType, MenuIcon } from "util/icons/Icon";
import { Sections } from "util/constants/Sections";

export const NavDrawer: FC = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    return (
        <>
            <IconButton
                aria-label="open menu drawer"
                icon={<MenuIcon />}
                onClick={onOpen}
                fontSize="2xl"
            />

            <Modal
                onClose={onClose}
                isOpen={isOpen}
                autoFocus={false}
                size="full"
            >
                <ModalOverlay
                    bg="blackAlpha.800"
                    backdropFilter="auto"
                    backdropBlur="10px"
                />
                <ModalContent background="none">
                    <Center position="absolute" top="16px" w="100%">
                        <IconButton
                            onClick={onClose}
                            aria-label="close drawer"
                            icon={<CloseIcon />}
                            fontSize="2xl"
                        />
                    </Center>
                    <ModalHeader mt="20" p="0">
                        <Center>
                            <Box width="48px">
                                <LogoType width="100%" height="32px" />
                            </Box>
                        </Center>
                    </ModalHeader>
                    <ModalBody>
                        <VStack spacing="4" mt="24">
                            {Sections.map((section) => (
                                <Link
                                    key={section.id}
                                    fontWeight="500"
                                    colorScheme="purple"
                                    fontSize="lg"
                                >
                                    {section.label}
                                </Link>
                            ))}
                        </VStack>

                        <Center mt="16">
                            <Socials />
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
