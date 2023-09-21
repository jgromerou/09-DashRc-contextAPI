import * as React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

// TODO remove, this demo shouldn't need to reset the theme.

//const defaultTheme = createTheme();

export default function RegisterPage() {
  const { createUser, state } = useContext(AuthContext);
  const { formState, onInputChange } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(
      formState.name,
      formState.lastname,
      formState.email,
      formState.password
    );
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        DashRc
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={state.errorMessage.length > 0 ? true : false}
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Nombre"
              autoFocus
              onChange={(event) => onInputChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={state.errorMessage.length > 0 ? true : false}
              required
              fullWidth
              id="lastname"
              label="Apellido"
              name="lastname"
              autoComplete="family-name"
              onChange={(event) => onInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={state.errorMessage.length > 0 ? true : false}
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              onChange={(event) => onInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={state.errorMessage.length > 0 ? true : false}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(event) => onInputChange(event)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrarse
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to={'/auth/login'}>
              <Button variant="text">Ingresar</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
