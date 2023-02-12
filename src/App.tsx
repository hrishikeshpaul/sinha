import { FC } from "react";

import { Container } from "@chakra-ui/layout";

import { Landing } from "sections/section-landing/SectionLanding";
import { Navbar } from "shared/navbar/Navbar";
import { Socials } from "shared/socials/Socials";

import "./App.css";

export const App: FC = () => {
    return (
        <Container className="App" maxW="container.lg">
            <Navbar />
            <Landing />
            <Socials display={{ base: "none", md: "flex" }} />
        </Container>
    );
};
