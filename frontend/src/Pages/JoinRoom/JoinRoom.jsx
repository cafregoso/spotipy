import React from 'react'
import {
  Button,
  Grid,
  Typography,
  TextField
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function JoinRoom() {
  const [ state, setState ] = useState({
    'roomCode': '',
    'error': false,
    'helpErrorText': '',
  })
  const navigate = useNavigate()

  const handleClick = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        code: state.roomCode
      })
    }

    fetch('/api/join-room/', requestOptions)
    .then((response) => {
      if (response.ok) {
        navigate(`/room/${state.roomCode}`)
      } else {
        setState({
          ...state,
          'error': true,
          'helpErrorText': 'Room Not Found',
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Grid container spacing={1} >
        <Grid item xs={12} align='center'>
          <Typography variant='h4' component='h4'>
            Join Room
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <TextField
            onChange={handleChange}
            name='roomCode'
            error={ state.error }
            label='Code'
            placeholder='Enter a Room Code'
            value={ state.roomCode }
            helperText={ state.helpErrorText }
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} align='center'>
          <Button variant='contained' color='primary' onClick={handleClick}>Enter Room</Button>
        </Grid>
        <Grid item xs={12} align='center'>
          <Button variant='contained' color='secondary' to="/" component={Link}>Home</Button>
        </Grid>
      </Grid>
    </div>
  )
}
