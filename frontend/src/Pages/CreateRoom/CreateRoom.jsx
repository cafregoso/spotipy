import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function JoinRoom() {
  const [ state, setState ] = useState({ "votes_to_skip": 0, "guest_can_pause": false }) 
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.type === 'radio' ? Boolean(e.target.value) : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(state)
    }
    fetch('/api/create-room/', requestOptions)
      .then((response) => response.json()
      .then((data) => navigate(`/room/${data.code}`))
    )
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align='center'>
        <Typography component='h4' variant="h4">
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <FormControl component='fieldset'>
          <FormHelperText sx={{ textAlign: 'center' }}>
              Guest control the music
          </FormHelperText>
          <RadioGroup name="guest_can_pause" row defaultValue={false} onChange={handleChange}>
            <FormControlLabel 
              value={true}
              control={<Radio color="primary"/>} 
              label='Play/Pause' 
              labelPlacement="bottom" 
            />
            <FormControlLabel 
              value={false}
              control={<Radio color="secondary"/>} 
              label='No Control' 
              labelPlacement="bottom" 
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField 
            required={true} 
            name="votes_to_skip"
            type='number' 
            defaultValue={state.votes_to_skip} 
            inputProps={{
              min: 1,
              style: { textAlign: "center" },
            }}
            onChange={handleChange}
            />
            <FormHelperText>
              Votes required to skip song
            </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align='center'>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Create A Room
        </Button>
      </Grid>
      <Grid item xs={12} align='center'>
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
