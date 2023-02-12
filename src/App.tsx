import { FC } from "react";

import { Landing } from "pages/landing/Landing";
import { Navbar } from "shared/navbar/Navbar";
import { Socials } from "shared/socials/Socials";

import "./App.css";

export const App: FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Landing />
            <Socials />
        </div>
    );
};
