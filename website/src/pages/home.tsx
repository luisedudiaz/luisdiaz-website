import { Container, Divider, Stack } from "@mui/material";
import { FC } from "react";
import Home from "../components/home"

const { About, Blog, Featured, Overview, Seo, Testimonials } = Home

const HomePage: FC = () => {
    return (
        <Container disableGutters>
            <Stack direction="column">
                <Seo />
                <About />
                <Overview />
                <Divider flexItem sx={{ mx: 4 }} />
                <Testimonials />
                <Divider flexItem sx={{ mx: 4 }} />
                <Featured />
                <Divider flexItem sx={{ mx: 4 }} />
                <Blog />
            </Stack>
        </Container >
    );
};

export default HomePage;
