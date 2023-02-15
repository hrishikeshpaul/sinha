import { FC } from "react";
import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";

export const AboutMe: FC = () => {
    return (
        <Section
            id={SectionIds.AboutMe}
            className="section-about-me"
            title="ABOUT ME"
        >
            hi
        </Section>
    );
};
