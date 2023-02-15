import { FC, ReactNode } from "react";

import { Box, Heading } from "@chakra-ui/layout";

import { SectionIds } from "util/constants/Sections";

interface Props {
    id: SectionIds;
    title: string;
    className: string;
    children: ReactNode | ReactNode[];
}

export const Section: FC<Props> = ({ id, title, className, children }) => {
    return (
        <Box px={{ base: 0, md: 0 }} className={className} id={id}>
            <Heading mb="16">
                {title}
            </Heading>
            {children}
        </Box>
    );
};
