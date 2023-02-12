import { FC, useState } from "react";

import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/layout";

import { ReleasesType } from "services/Data.api";
import { useData } from "services/Data";
import { ListenNowModal } from "shared/listen-now-modal/ListenNowModal";
import { SectionIds } from "util/constants/Sections";
import { PlayIcon, RightIcon } from "util/icons/Icon";

import "./Releases.scss";

export const SectionReleases: FC = () => {
    const { data } = useData();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [currentRelease, setCurrentRelease] = useState<ReleasesType | null>(
        null
    );

    return (
        <Box
            py="32"
            px={{ base: 0, md: 0 }}
            className="section-releases"
            id={SectionIds.Releases}
        >
            {currentRelease && (
                <ListenNowModal
                    isOpen={isOpen}
                    onClose={onClose}
                    release={currentRelease}
                />
            )}
            <Heading>RELEASES</Heading>
            <SimpleGrid
                mt="16"
                w="100%"
                gridGap="32px"
                gridTemplateRows="auto"
                gridTemplateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                }}
            >
                {data.releases.map((release, idx) => (
                    <Box
                        className={`card ${idx === 0 ? "first" : ""}`}
                        key={release.id}
                    >
                        {idx < 4 ? (
                            <>
                                <Image className="art" src={release.art} />

                                <Flex
                                    className="info"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                >
                                    <Box>
                                        <Text className="title">
                                            {release.title}
                                        </Text>
                                        <Text className="artists">
                                            {release.artists
                                                .map((artist) => artist.name)
                                                .join(",")}
                                        </Text>
                                        <Text
                                            className="description"
                                            pt="1"
                                            fontSize="sm"
                                            noOfLines={idx === 0 ? 10 : 2}
                                            display={{
                                                base: "none",
                                                md: "-webkit-box",
                                            }}
                                        >
                                            {release.description}
                                        </Text>
                                    </Box>

                                    <Flex gap="4">
                                        <Button
                                            variant="outline"
                                            mt="4"
                                            leftIcon={<PlayIcon />}
                                            onClick={() => {
                                                setCurrentRelease(release);
                                                onOpen();
                                            }}
                                        >
                                            Listen Now
                                        </Button>
                                    </Flex>
                                </Flex>
                            </>
                        ) : null}
                    </Box>
                ))}
            </SimpleGrid>
            <Button
                mt={{ base: 4, md: 16 }}
                py="8"
                px="8"
                // pl="0"
                // _hover={{
                //     bg: "gray.900",
                //     textDecoration: "underline",
                // }}
                // _focus={{ bg: "gray.900" }}
                color="white"
                variant="outline"
                rightIcon={<RightIcon ml="4" fontSize="lg" />}
            >
                View all releases
            </Button>
        </Box>
    );
};
