import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../Theme/UseStyles';
import { Link } from 'react-router-dom';

const clearUsuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
}

const RegistrarUsuario = () => {

    const classes = useStyles();

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: ''
    });

    const handledChange = (e) => {
        const {name, value} = e.target;

        setUsuario(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    const guardarUsuarios = () => {
        console.log("mi usuario es ", usuario);
        setUsuario(clearUsuario);
    }

    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item lg={6} md={8}>
                    <Card align="center" className={classes.card}>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person_add</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">Registro de Usuario</Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    fullWidth 
                                    name="nombre"
                                    value={usuario.nombre} 
                                    onChange={handledChange} />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Apellidos"
                                    variant="outlined"
                                    fullWidth 
                                    name="apellidos"
                                    value={usuario.apellidos} 
                                    onChange={handledChange} />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth 
                                    type="email"
                                    name="email"
                                    value={usuario.email} 
                                    onChange={handledChange} />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth 
                                    type="password"
                                    name="password"
                                    value={usuario.password} 
                                    onChange={handledChange} />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb}>
                                    <Button
                                    variant="contained"
                                    fullWidth 
                                    color="primary"
                                    onClick={guardarUsuarios}
                                    type="submit">Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link 
                            to="/login"
                            variant="body1"
                            className={classes.link}>
                            ¿Ya tienes una cuenta? Logueate!
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegistrarUsuario;