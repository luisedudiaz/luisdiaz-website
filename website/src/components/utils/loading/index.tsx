import { styled, keyframes } from "@mui/material/styles";
import { FC } from "react";

const LoadingContainer = styled('div')(() => ({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center"
}))

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  0% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(24px, 0);
  }
`

const ellipsis3 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const Ellipsis = styled('div')(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  width: 80,
  height: 80,
  "& div": {
    position: "absolute",
    top: 33,
    width: 13,
    height: 13,
    borderRadius: "50%",
    background: theme.palette.primary.main,
    animationTimingFunction: "cubic-bezier(0, 1, 1, 0)",
    "&:nth-of-type(1)": {
      left: 8,
      animation: `${ellipsis1} 0.6s infinite`
    },
    "&:nth-of-type(2)": {
      left: 8,
      animation: `${ellipsis2} 0.6s infinite`
    },
    "&:nth-of-type(3)": {
      left: 32,
      animation: `${ellipsis2} 0.6s infinite`
    },
    "&:nth-of-type(4)": {
      left: 56,
      animation: `${ellipsis3} 0.6s infinite`
    },
  },
}))

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <Ellipsis>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ellipsis>
    </LoadingContainer>
  );
};

export default Loading;
