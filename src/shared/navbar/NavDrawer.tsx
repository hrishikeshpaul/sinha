import { FC } from "react";

import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/modal";

import { MenuIcon } from "util/icons/Icon";

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
                    backdropBlur="6px"
                />
                <ModalContent background="none">
                    <ModalCloseButton />
                    <ModalBody>Menu</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
