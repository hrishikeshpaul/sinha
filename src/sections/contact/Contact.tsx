import { ChangeEvent, FC, FormEvent, useState } from "react";

import {
    Box,
    Button,
    Input,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    Image,
} from "@chakra-ui/react";

import { Section } from "sections/Section";
import { SectionIds } from "util/constants/Sections";
import { useData } from "services/Data";
import { imageTransition } from "util/constants/Transition";
import axios from "axios";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const emptyForm = {
    name: "",
    email: "",
    message: "",
};

export const Contact: FC = () => {
    const { data } = useData();
    const [form, setForm] = useState<FormData>(emptyForm);
    const [loading, setLoading] = useState<boolean>(false);

    const Label: FC<{ children: string }> = ({ children }) => {
        return (
            <Text pb="2" fontSize="sm" fontWeight="600">
                {children}
            </Text>
        );
    };

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, {
            service_id: "service_8tir748",
            template_id: "template_zuz0rim",
            user_id: "3Bfga-2Qd3hhlxH3V",
            template_params: {
                name: form.name,
                email: form.email,
                message: form.message,
            },
        });
        setLoading(false);

        setForm(emptyForm);
    };

    return (
        <Section
            id={SectionIds.Contact}
            className="section-contact"
            title="CONTACT"
        >
            <Text mb="8">Pls reach out</Text>
            <SimpleGrid
                gridGap="32px"
                gridTemplateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                }}
            >
                <Box display={{ base: "none", md: "block" }}>
                    <Image src={data.contactMeImg} {...imageTransition} />
                </Box>
                <form onSubmit={onSubmit}>
                    <Stack spacing="8">
                        <Box>
                            <Label>Name</Label>
                            <Input
                                name="name"
                                onChange={onChange}
                                value={form.name}
                            />
                        </Box>
                        <Box>
                            <Label>Email</Label>
                            <Input
                                name="email"
                                onChange={onChange}
                                value={form.email}
                            />
                        </Box>
                        <Box>
                            <Label>Message</Label>
                            <Textarea
                                rows={8}
                                name="message"
                                onChange={onChange}
                                value={form.message}
                            />
                        </Box>
                        <Button variant="big" type="submit" isLoading={loading}>
                            Send
                        </Button>
                    </Stack>
                </form>
            </SimpleGrid>
        </Section>
    );
};
