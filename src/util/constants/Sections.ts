export enum SectionIds {
    Landing = "section-landing",
    Music = "section-music",
    AboutMe = "section-about-me",
    Events = "section-events",
    Contact = "section-contact",
}

export const Sections = [
    {
        id: SectionIds.Landing,
        label: "Home",
    },
    {
        id: SectionIds.Music,
        label: "Music",
    },
    {
        id: SectionIds.AboutMe,
        label: "About me",
    },
    {
        id: SectionIds.Events,
        label: "Events",
    },
    {
        id: SectionIds.Contact,
        label: "Contact",
    },
];

export const scrollToSection = (sectionId: SectionIds) => {
    const section = document.querySelector(`#${sectionId}`);

    section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
