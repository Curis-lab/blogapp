"use client";

import Image from "next/image";
import { Divider, IconButton, styled, Typography , TextField, Box, Button, Paper} from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";
import { useState } from "react";

const StyledIconBtnContainer = styled("div")({
  display: "flex",
  gap:1
});

const StyledPaper = styled(Paper)(({theme})=>({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
}))

export default function SignInBtns() {
  const [formData, setFormData] = useState({name:"",email:"", password:""});
  const [isRegister, setIsRegister] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const handleSubmit = async(e)=>{

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const data = await res.json();
      console.log('Success:', data);
    }
    catch(error) {
      console.error('Error:', error);
    }
  }
  return (
    <StyledPaper>
      <Typography variant="h4">Login to your account</Typography>
      <StyledIconBtnContainer>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>

        <Google />
        </IconButton>
      </StyledIconBtnContainer>
      <Divider orientation="horizontal" />
      <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit();
      }}>
        {isRegister && <TextField
          required
          fullWidth
          id="name"
          label="User Name"
          name="name"
          autoComplete="name"
          autoFocus
          size="small"
          value={formData.name}
          onChange={handleChange}
        />}
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          size="small"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          size="small"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1 }}
        >
          Sign In
        </Button>
      </Box>
      <p>if you do not <span onClick={()=>setIsRegister(prev=>!prev)}>Reigster</span></p>
    </StyledPaper>
  );
}
