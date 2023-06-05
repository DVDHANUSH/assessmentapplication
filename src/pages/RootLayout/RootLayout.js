import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Button,TextField,Checkbox,FormControlLabel} from '@mui/material'
import Box from '@mui/material/Box';

function RootLayout() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <Navbar/>
      <Button variant="outlined" textalign="center" style={{marginLeft:'15%',marginTop:'8%',color:'black',borderRadius:'4px',backgroundColor:'#FFFFFF',border:0,boxShadow:"0px 2px 4px rgba(0,0,0,0.6)",fontSize:'14px'}}>Full Name</Button>
      <TextField color='warning' size="small"  style={{margin:'none',marginTop:'8%',marginLeft:'2%',borderRadius:'4px',boxShadow:"0px 2px 4px rgba(0,0,0,0.6)",width:400}}/><br></br>
      <Button variant="outlined" textalign="center" style={{marginLeft:'15%',marginTop:'2%',color:'black',borderRadius:'4px',backgroundColor:'#FFFFFF',border:0,boxShadow:"0px 2px 4px rgba(0,0,0,0.6)",width:"111px",height:"34px",padding: "5px 15px"}}>Email</Button>
      <TextField color='warning' size="small" disabled style={{margin:'none',marginTop:'2%',marginLeft:'2%',borderRadius:'4px',boxShadow:"0px 2px 4px rgba(0,0,0,0.6)",width:400,backgroundColor:"#D9D9D9"}}/>
      <Box
      sx={{
        height: 300,
        backgroundColor: '#FFFFFF',
        marginLeft:'15%',
        marginTop:'2%',
        fontSize:'14px',
        fontWeight:"medium",
        boxShadow:'0px 2px 4px rgba(0,0,0,0.6)',
        width:'70%'
      }}
    >
      <div style={{marginLeft:'3%'}}>Terms & Conditions</div><br></br>
    
    <FormControlLabel sx={{marginLeft:"2%",fontSize:"14px"}} control={
    <Checkbox  sx={{color:'#fe524a', '&.Mui-checked': {
      color:"#fe524a"}}}/>} label="I Agree to the terms and conditions"/>
      <Button variant="outlined" textalign="center" sx={{borderColor:"#fe524a",color:"#fe524a",'&:hover':{backgroundColor:"#fe524a",color:"#FFFFFF"},float:'right',marginRight:'15px'}}>SUBMIT</Button>
      </Box>
      <Outlet/>
    </div>
  )
}

export default RootLayout
