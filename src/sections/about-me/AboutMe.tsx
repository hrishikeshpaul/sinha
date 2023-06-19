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
import { ArrowRightIcon } from "@chakra-ui/icons";
import { RightIcon } from "util/icons/Icon";

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
                        src="about-me-1.jpeg"
                    />
                    <Text
                        fontSize="lg"
                        p={{ base: "0", md: 4 }}
                        bg="gray.900"
                        position={{ base: "relative", md: "absolute" }}
                        width={{ base: "100%", md: "50%" }}
                        right={{ base: "0", md: 8 }}
                    >
                        It was a good idea. At least, they all thought it was a
                        good idea at the time. Hindsight would reveal that in
                        reality, it was an unbelievably terrible idea, but it
                        would take another week for them to understand that.
                        Right now, at this very moment. they all agreed that it
                        was the perfect course of action for the current
                        situation.
                    </Text>
                </Flex>

                <Box>
                    <Text fontWeight="500">
                        Here are some pictures from my shows and events
                    </Text>
                    <br />
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry columnsCount={2} gutter="16px">
                            {data.gallery.map((gal) => (
                                <Image src={gal.src} key={gal.src} />
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
