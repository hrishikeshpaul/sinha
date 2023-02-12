import { FC } from "react";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/layout";

import { useData } from "services/Data";

import "./SectionReleases.scss";
import { RightIcon } from "util/icons/Icon";

export const SectionReleases: FC = () => {
    const { data } = useData();

    return (
        <Box py="32" px={{ base: 0, md: 0 }} className="section-releases">
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

                                <Box className="info">
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
                                    >
                                        {release.description}
                                    </Text>
                                </Box>
                            </>
                        ) : null}
                    </Box>
                ))}
            </SimpleGrid>
            <Button
                mt={{ base: 4, md: 16 }}
                py="8"
                px="8"
                pl="0"
                _hover={{
                    bg: "gray.900",
                    textDecoration: "underline",
                }}
                _focus={{ bg: "gray.900" }}
                color="white"
                rightIcon={<RightIcon ml="4" fontSize="lg" />}
            >
                View all releases
            </Button>
        </Box>
    );
};
