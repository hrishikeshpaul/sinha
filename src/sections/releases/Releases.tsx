import { FC } from "react";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Text, SimpleGrid, Flex } from "@chakra-ui/layout";

import { Section } from "sections/Section";
import { useData } from "services/Data";
import { ListenNowMenu } from "common/listen-now-menu/ListenNowMenu";
import { SectionIds } from "util/constants/Sections";
import { RightIcon } from "util/icons/Icon";

import "./Releases.scss";

export const SectionReleases: FC = () => {
    const { data } = useData();

    return (
        <Section
            id={SectionIds.Releases}
            title="RELEASES"
            className="section-releases"
        >
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
                                            noOfLines={4}
                                            display={
                                                idx > 0
                                                    ? {
                                                          base: "none",
                                                          md: "-webkit-box",
                                                      }
                                                    : "-webkit-box"
                                            }
                                        >
                                            {release.description}
                                        </Text>
                                    </Box>

                                    <Flex gap="4">
                                        <ListenNowMenu release={release} />
                                    </Flex>
                                </Flex>
                            </>
                        ) : null}
                    </Box>
                ))}
            </SimpleGrid>
            <Button
                mt={{ base: 4, md: 16 }}
                color="white"
                variant="big"
                rightIcon={<RightIcon ml="4" fontSize="lg" />}
            >
                VIEW ALL RELEASES
            </Button>
        </Section>
    );
};
