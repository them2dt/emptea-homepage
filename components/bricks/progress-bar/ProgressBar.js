import React from 'react'
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  border: "0px solid black",
  borderRadius:10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#09b685" : "#09b685",
  },
}));

export default function ProgressBar({variant,value}) {
  return (
    <BorderLinearProgress variant={variant} value={value}/>
  )
}