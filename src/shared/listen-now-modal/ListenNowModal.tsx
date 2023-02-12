import { FC } from "react";

import {
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalBody,
    ModalOverlay,
    ModalProps,
} from "@chakra-ui/modal";
import { ReleasesType } from "services/Data.api";
import { Center, Image, Text } from "@chakra-ui/react";

interface Props extends Pick<ModalProps, "isOpen" | "onClose"> {
    release: ReleasesType;
}

export const ListenNowModal: FC<Props> = ({ release, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} isCentered>
            <ModalOverlay
                bg="blackAlpha.800"
                backdropFilter="auto"
                backdropBlur="10px"
            />
            <ModalContent mx="4" bg="gray.900">
                <ModalCloseButton />

                <ModalBody p="8">
                    <Center flexDirection="column">
                        <Image src={release.art} w="108px" h="108px" />
                        <Text className="title" fontWeight="600" pt="2">
                            {release.title}
                        </Text>
                        <Text className="artists">
                            {release.artists
                                .map((artist) => artist.name)
                                .join(",")}
                        </Text>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
