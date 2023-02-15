import { FC } from "react";

import {
    Box,
    Button,
    Input,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";

import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";

export const Contact: FC = () => {
    const Label: FC<{ children: string }> = ({ children }) => {
        return (
            <Text pb="2" fontSize="sm" fontWeight="600">
                {children}
            </Text>
        );
    };
    return (
        <Section
            id={SectionIds.Contact}
            className="section-contact"
            title="CONTACT"
        >
            <SimpleGrid
                gridGap="32px"
                gridTemplateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                }}
            >
                <Box display={{ base: "none", md: "block" }}>
                    <Text>A picture of you goes here with a hi</Text>
                </Box>
                <Stack spacing="8">
                    <Box>
                        <Label>Name</Label>
                        <Input />
                    </Box>
                    <Box>
                        <Label>Email</Label>
                        <Input />
                    </Box>
                    <Box>
                        <Label>Message</Label>
                        <Textarea rows={8} />
                    </Box>

                    <Button variant="big">Send</Button>
                </Stack>
            </SimpleGrid>
        </Section>
    );
};
