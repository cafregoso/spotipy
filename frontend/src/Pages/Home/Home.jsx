import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Fragment>
      {/* <nav>
        <Link to='/create'>Create Room</Link>
        <Link to='/join'>Join Room</Link>
      </nav>
      <h1>Home</h1> */}
      <Grid container spacing={3}>
        <Grid item xs={12} align='center'>
          <Typography variant='h3' component='h3'>
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <ButtonGroup disableElevation variant='contained' color='primary'>
            <Button color='primary' to='/join' component={Link}>
              Join a Room
            </Button>
            <Button color='secondary' to='/create' component={Link}>
              Creat a Room
            </Button>

          </ButtonGroup>
        </Grid>
      </Grid>
    </Fragment>
  )
}
