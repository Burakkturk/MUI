import { Padding } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

const Typo = () => {
  return (
    <Box sx={{backgroundColor:"red", padding:"1 rem"}}>
        <Typography variant="h6" component="h1" color="#bebe">MUI Typo</Typography>
        <Typography variant="subtitle2"  color="palegreen">MUI Typo</Typography>
        <Typography variant="body2" >Button Text</Typography>
        <Typography variant="body2" sx={{color:"blue", backgroundColor:"palevioletred", mt:"1rem"}} >Button Text</Typography>
        
        Typo</Box>
  ) 
}

export default Typo