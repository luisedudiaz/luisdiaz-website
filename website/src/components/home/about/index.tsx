import { FC } from "react";
// import Image from "../../../atoms/image"
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { common } from "@mui/material/colors";

const About: FC = () => {
    return (
        <Grid pt={6} container component="section" sx={{
            background: theme => theme.palette.background.paper,
            p: {
                xs: 4,
                md: 8
            }
        }}>
            <Grid item xs>
                <div className="media-body">
                    <Typography variant="h3" component="h3" fontWeight="bold" mb={1}>Luis Díaz</Typography>
                    <Typography mb={3} variant="h5" component="div" fontWeight={theme => theme.typography.fontWeightLight}>Software Engineer</Typography>
                    <Box mb={3}>
                        I'm a software engineer specialised in frontend and backend
                        development for complex scalable web apps.
                        {/* I write about software development on <Link to="/blog">my blog</Link>.  */}{" "}
                        Want to know how I may help your project? Check out my
                        {/* project{" "}
              <Link to="/portfolio">portfolio</Link> and */}
                        {" "}
                        <Link
                            href="Luis_Diaz_Software_Engineer.pdf"
                            target="_blank"
                        >
                            online resume
                        </Link>
                        .
                    </Box>
                    <Box>
                        {/* <Link to="/portfolio" className="btn btn-primary me-2 mb-3">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="me-2"
                />
                <span className="d-none d-md-inline">View</span> Portfolio
              </Link> */}
                        <Button
                            variant="contained"
                            href="Luis_Diaz_Software_Engineer.pdf"
                            target="_blank"
                            sx={{
                                mb: 3,
                                color: common.white,
                                fontWeight: "bold",
                                textTransform: 'none',
                            }}
                        >
                            <Typography component="span" noWrap >
                                <FontAwesomeIcon icon={faFileAlt} />
                            </Typography>
                            <Typography ml={0.5} fontWeight="bold" component="span" sx={{
                                display: {
                                    xs: "none",
                                    lg: "block"
                                }
                            }} noWrap>View</Typography>
                            <Typography ml={0.5} fontWeight="bold" component="span" noWrap>
                                Resume
                            </Typography>
                        </Button>
                    </Box>
                </div>

            </Grid>
            <Grid item xs={12} lg={5}>

                {/*<Image name="profile-lg" />*/}
            </Grid>
        </Grid >
    );
};

export default About;
