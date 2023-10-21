import React from "react";
import Alert  from "@mui/material/Alert";

const ErrorAlert = ({errorMessage})=>{
    console.log("error msg", errorMessage)
    return <Alert severity="warning" sx={{ m:2}}>{errorMessage}</Alert>
}

export default ErrorAlert;