import { Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import TestimonialCards from "./testimonial-cards";

const Testimonials: FC = () => (
    <Grid pt={6} container component="section" sx={{
        p: {
            xs: 4,
            md: 8
        }
    }}>
        <Grid container item mb={3}>
            <Divider orientation="vertical" variant="fullWidth" flexItem sx={{
                background: theme => theme.palette.primary.main,
                width: 5
            }} />
            <Grid ml={2} item>
                <Typography fontSize="2rem" fontWeight="bold" variant="h2" component="h2" className="section-title font-weight-bold mb-3">Testimonials</Typography>
            </Grid>
        </Grid>
        <Grid container item justifyContent="center">
            <TestimonialCards />
        </Grid>
    </Grid>
);

export default Testimonials;
