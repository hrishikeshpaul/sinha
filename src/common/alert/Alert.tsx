import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

import "./Alert.scss";

interface Props {
    link: string;
}

export const Alert: FC<Props> = ({ link }) => {
    return (
        <Box
            className="alert"
            data-aos="fade-down"
            data-aos-delay="500"
            py="2"
            fontWeight="500"
            background="white"
            transition="all 0.15s ease-in-out"
            _hover={{ fontWeight: "600" }}
            onClick={() => window.open(link, "_blank")}
        >
            <Text textAlign="center" fontSize="sm">
                "Name of song" out on June 24th. Click here to presave
            </Text>
        </Box>
    );
};
