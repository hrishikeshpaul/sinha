import { FC, useEffect, useState } from "react";

import { Box, Center } from "@chakra-ui/layout";

import { LogoType } from "util/icons/Icon";

export const Title: FC = () => {
    const [scale, setScale] = useState<number>(1000);
    const [intervalTime, setIntervalTime] = useState<number>(10);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (scale > 50) {
    //             setScale((s) => {
    //                 return s - 0.75;
    //             });
    //         } else if (scale > 1) {
    //             setScale((s) => {
    //                 return s - 0.4;
    //             });
    //         }

    //         // if (scale > 10) {
    //         //     setScale((s) => {
    //         //         return s - 0.05;
    //         //     });
    //         // }

    //         // if (scale > 1) {
    //         //     setScale((s) => {
    //         //         return s - 0.025;
    //         //     });
    //         // }
    //     }, 10);

    //     return () => clearInterval(interval);
    // }, [scale]);

    return (
        <Center w="full">
            <Box
                w="40%"
                // transform={`scale(${scale})`}
                // transition="scale 0.1s ease-in-out"
            >
                <LogoType width="100%" />
            </Box>
        </Center>
    );
};
