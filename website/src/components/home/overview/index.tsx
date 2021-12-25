import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Grid, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { Skills } from "types";
// import { Link } from "react-router-dom";

library.add(fab)

const Overview: FC = () => {
    const [skills, setSkills] = useState<Skills[]>([])
    useEffect(() => {
        const getSkills = async () => {
            const skills = (await getDocs(collection(getFirestore(), "users", process.env.REACT_APP_UID!, "skills"))).docs.map(e => e.data()) as Skills[]
            setSkills(skills)
        }
        getSkills()
    }, [])
    return (
        <Grid py={6} container component="section" sx={{
            px: {
                xs: 4,
                sm: 10,
                md: 24
            }
        }}>
            <Grid container item mb={3}>
                <Divider orientation="vertical" variant="fullWidth" flexItem sx={{
                    background: theme => theme.palette.primary.main,
                    width: 5
                }} />
                <Grid ml={2} item>
                    <Typography fontSize="2rem" fontWeight="bold" variant="h2" component="h2" className="section-title font-weight-bold mb-3">What I do</Typography>
                </Grid>
            </Grid>
            <Grid item mb={4}>
                <Typography variant="body1" component="div">
                    I have 3 years experience building software for clients. Below is a
                    quick overview of my main technical skill sets and technologies I use.
                    {/* Want to find out more about my experience? Check out my
          <Link to="/portfolio"> project portfolio</Link>. */}
                </Typography>
            </Grid>
            <Grid container spacing={5} item>
                {skills.map((skill, i) =>
                (<Grid key={i} item xs={6} lg={3}>
                    <Grid container item direction="column">
                        <Grid item>
                            {skill.icons.map((icon, i) => (
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={[icon.prefix, icon.name]}
                                    // icon={icon.name}
                                    color={icon.color}
                                    style={{ marginRight: 4 }}
                                />
                            ))}
                        </Grid>
                        <Grid item mb={1}>
                            <Typography variant="body1" fontWeight="bold" component="h3" >{skill.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="div" className="item-desc">{skill.description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>)
                )}
                {/*<div className="text-center py-3">
        <Link to="/services" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="me-2" />Services &amp; Pricing
        </Link>
      </div>*/}
            </Grid>
        </Grid>
    );
};

export default Overview;
