import { FC, ReactNode, useLayoutEffect } from "react";

import { BrowserRouter, useLocation } from "react-router-dom";

import { DataProvider } from "services/Data";
import { Router } from "router/Router";

import "./App.css";

const ScrollWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{children}</>;
};

export const App: FC = () => {
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
