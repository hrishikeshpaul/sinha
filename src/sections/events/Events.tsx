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
            Upcoming events
        </Section>
    );
};
