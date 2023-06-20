import { FC } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";
import { useData } from "services/Data";
import { imageTransition } from "util/constants/Transition";

export const AboutMe: FC = () => {
    const { data } = useData();

    return (
        <Section
            id={SectionIds.AboutMe}
            className="section-about-me"
            title="ABOUT ME"
        >
            <Stack gap="16">
                <Flex
                    gap="8"
                    alignItems="center"
                    flexDir={{ base: "column", md: "row" }}
                    position="relative"
                >
                    <Image
                        width={{ base: "100%", md: "50%" }}
                        src={data.about.image}
                        {...imageTransition}
                    />
                    <Box
                        fontSize="lg"
                        p={{ base: "0", md: 4 }}
                        bg="gray.900"
                        position={{ base: "relative", md: "absolute" }}
                        width={{ base: "100%", md: "50%" }}
                        right={{ base: "0", md: 8 }}
                    >
                        {data.about.description.map((desc, idx) => (
                            <Box key={desc}>
                                <Text>{desc}</Text>
                                <br />
                            </Box>
                        ))}
                    </Box>
                </Flex>

                <Box>
                    <Text fontWeight="500">
                        Here are some pictures from my shows and events
                    </Text>
                    <br />
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
                    >
                        <Masonry columnsCount={3} gutter="16px">
                            {data.gallery.map((gal) => (
                                <Image
                                    src={gal.src}
                                    key={gal.src}
                                    {...imageTransition}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    <br />
                    <Center>
                        <Button variant="outline" fontSize="xs">
                            See more pictures
                        </Button>
                    </Center>
                </Box>
            </Stack>
        </Section>
    );
};
