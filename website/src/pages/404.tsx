import { FC } from "react"
import { Link } from "react-router-dom"
import SEO from "components/utils/seo"
import { Button, Container, Stack, Typography } from "@mui/material"

const NotFoundPage: FC = () => (
  <>
    <SEO />
    <Container maxWidth={false} disableGutters>
      <Stack direction="row" height="90vh" alignItems="center" justifyContent="center">
        <Stack>
          <Typography align="center" component="h4" variant="h4" fontWeight="bold">
            NOT FOUND
          </Typography>
          <Typography align="center" component="p" variant="overline">
            You just hit a route that doesn't exist... the sadness.
          </Typography>
          <Button variant="contained" component={Link} to="/">Go to Home</Button>
        </Stack>
      </Stack>
    </Container>
  </>
)

export default NotFoundPage
