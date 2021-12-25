import { FC } from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const Div = styled("footer")(({ theme }) => ({
  textAlign: "center",
  padding: "1.5rem 0",
  "a": {
    color: theme.palette.primary.main
  }
}))

const Footer: FC = () => {
  return (
    <Div>
      <Typography variant="caption">
        Template Copyright &copy;
        <a
          href="https://themes.3rdwavemedia.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          3rd Wave Media
        </a>
      </Typography>
    </Div>
  )
}

export default Footer

