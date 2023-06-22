import { Text } from "@chakra-ui/react";
import { FC } from "react";

import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";

export const Events: FC = () => {
    return (
        <Section
            id={SectionIds.Events}
            className="section-events"
            title="UPCOMING EVENTS"
        >
            <Text textAlign="center">No upcoming events</Text>
        </Section>
    );
};
