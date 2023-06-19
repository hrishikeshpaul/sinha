import { FC } from "react";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";

export const AboutMe: FC = () => {
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
            </Stack>
        </Section>
    );
};
