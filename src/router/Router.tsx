import { FC, Suspense } from "react";

import { Center, Container, Spinner } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Landing } from "sections/landing/Landing";
import { SectionReleases } from "sections/releases/Releases";
import { Socials } from "shared/socials/Socials";
import { Navbar } from "shared/navbar/Navbar";
import { MAX_WIDTH } from "util/constants/Layout";

const SectionsContent: FC = () => {
    return (
        <>
            <Landing />
            <Socials display={{ base: "none", md: "flex" }} />
            <SectionReleases />
        </>
    );
};

export const Router: FC = () => {
    return (
        <>
            <Container className="App" maxW={MAX_WIDTH}>
                <Navbar />

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
