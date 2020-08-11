import React from "react"
import {Divider, Grid, Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import AudioPlayer from "material-ui-audio-player/dist";
import {IPokemon} from "../interface";

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },
    image: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 150,
        height: 150
    }
}))

interface IInformationProps {
    pokemon: IPokemon | null
}

export const Information: React.FC<IInformationProps> = ({pokemon}) => {
    const classes = useStyle()
    if (!pokemon) {
        return (
            <Paper className={classes.paper}>
                <Typography gutterBottom variant='h5' align='center'>
                    Listen to the player. <br/>
                    Select a bird from the list
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <img className={classes.image} alt='pokemon' src={pokemon.image}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction='column' spacing={1}>
                        <Grid item xs>
                            <Typography gutterBottom variant='h5'>
                                {pokemon.name}
                            </Typography>
                            <Divider/>
                            <Typography gutterBottom variant='body2'>
                                {pokemon.species.join(' ')}
                            </Typography>
                            <Divider/>
                            <Grid style={{paddingLeft: 20, paddingTop: 20}}>
                                <AudioPlayer src={pokemon.audio}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant='body1'>
                    {pokemon.description}
                </Typography>
            </Grid>
        </Paper>
    )
}