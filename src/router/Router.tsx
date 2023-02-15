import { FC, Suspense } from "react";

import { Center, Container, Spinner, Stack } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Landing } from "sections/landing/Landing";
import { SectionReleases } from "sections/releases/Releases";
import { Socials } from "common/socials/Socials";
import { Navbar } from "common/navbar/Navbar";
import { MAX_WIDTH } from "util/constants/Layout";
import { Contact } from "sections/contact/Contact";
import { Footer } from "common/footer/Footer";
import { AboutMe } from "sections/about-me/AboutMe";
import { Events } from "sections/events/Events";

const SectionsContent: FC = () => {
    return (
        <>
            <Landing />
            <Stack spacing="32" mt="32">
                <SectionReleases />
                <AboutMe />
                <Events />
                <Contact />
            </Stack>
            <Footer />
        </>
    );
};

export const Router: FC = () => {
    return (
        <>
            <Container className="App" maxW={MAX_WIDTH}>
                <Navbar />
                <Socials display={{ base: "none", md: "flex" }} />

                <Suspense
                    fallback={
                        <Center>
                            <Spinner size="xl" />
                        </Center>
                    }
                >
                    <Routes>
                        <Route path="/" element={<SectionsContent />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
};
