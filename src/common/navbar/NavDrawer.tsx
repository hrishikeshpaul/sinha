import { FC } from "react";

import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, VStack } from "@chakra-ui/layout";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";

import { Socials } from "common/socials/Socials";
import { CloseIcon, LogoType, MenuIcon } from "util/icons/Icon";
import { scrollToSection, Sections } from "util/constants/Sections";

export const NavDrawer: FC = () => {
    const { onClose, onOpen, isOpen } = useDisclosure();

    return (
        <>
            <IconButton
                variant="ghost"
                aria-label="open menu drawer"
                icon={<MenuIcon fontSize="15pt" />}
                onClick={onOpen}
                ml="4"
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
                            fontSize="3xl"
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
                                <Button
                                    key={section.id}
                                    fontWeight="500"
                                    fontSize="lg"
                                    textTransform="uppercase"
                                    onClick={() => {
                                        onClose();
                                        setTimeout(() => {
                                            scrollToSection(section.id);
                                        }, 250);
                                    }}
                                >
                                    {section.label}
                                </Button>
                            ))}
                        </VStack>

                        <Center mt="16">
                            <Socials orientation="row" />
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
