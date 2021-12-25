import { Grid, Divider, Typography } from '@mui/material'
import { FC } from 'react'
import ProjectCards from './project-cards'

const Featured: FC = () => (
    <Grid py={6} container component="section" sx={{
        px: {
            xs: 4,
            md: 24
        }
    }}>
        <Grid container item mb={3}>
            <Divider orientation="vertical" variant="fullWidth" flexItem sx={{
                background: theme => theme.palette.primary.main,
                width: 5
            }} />
            <Grid ml={2} item>
                <Typography fontSize="2rem" fontWeight="bold" variant="h2" component="h2" className="section-title font-weight-bold mb-3">Featured Projects</Typography>
            </Grid>
        </Grid>
        <Grid container item justifyContent="center">
            <ProjectCards />
        </Grid>
    </Grid>
)

export default Featured
