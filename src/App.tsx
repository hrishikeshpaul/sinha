import { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AOS from "aos";

import { DataProvider } from "services/Data";
import { Router } from "router/Router";

import "aos/dist/aos.css";
import "./App.scss";

const ScrollWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};

export const App: FC = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <BrowserRouter>
            <ScrollWrapper>
                <DataProvider>
                    <Router />
                </DataProvider>
            </ScrollWrapper>
        </BrowserRouter>
    );
};
