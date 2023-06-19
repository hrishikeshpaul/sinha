import { FC } from "react";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Section } from "sections/Section";
import { useData } from "services/Data";
import { ListenNowMenu } from "common/listen-now-menu/ListenNowMenu";
import { SectionIds } from "util/constants/Sections";
import { VideoIcon } from "util/icons/Icon";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Releases.scss";

export const SectionReleases: FC = () => {
    const { data } = useData();

    return (
        <Section id={SectionIds.Music} title="MUSIC" className="section-music">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="music-swiper"
            >
                {data.releases.map((release, idx) => (
                    <SwiperSlide className="music-swiper-item-wrapper">
                        <Flex
                            flexDir="column"
                            alignItems="center"
                            className="music-swiper-item"
                        >
                            <Flex
                                width="100%"
                                position="relative"
                                className="art"
                                flexDir="column"
                            >
                                <Image src={release.art} />
                                <Box
                                    className="art-overlay"
                                    position="absolute"
                                    left="50%"
                                    top="50%"
                                    transform="translate(-50%, -50%)"
                                >
                                    <Box>
                                        <Text className="title">
                                            {release.title}
                                        </Text>
                                        <Text className="artists" fontSize="sm">
                                            {release.artists
                                                .map((artist) => artist.name)
                                                .join(",")}
                                        </Text>
                                    </Box>
                                </Box>
                            </Flex>
                            <Flex gap="6">
                                <ListenNowMenu release={release} />
                                <Button
                                    variant="link"
                                    mt="4"
                                    fontSize="xs"
                                    leftIcon={<VideoIcon />}
                                >
                                    Music Video
                                </Button>
                            </Flex>

                            {/* <Flex bg="gray.800" width="100%" p="4">
                                <Box>
                                    <Text className="title">
                                        {release.title}
                                    </Text>
                                    <Text className="artists" fontSize="sm">
                                        {release.artists
                                            .map((artist) => artist.name)
                                            .join(",")}
                                    </Text>
                                </Box>
                            </Flex> */}
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};
