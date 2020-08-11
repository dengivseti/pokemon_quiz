import React, {useContext} from "react"
import {Divider, Grid, Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import AudioPlayer from "material-ui-audio-player/dist"
import {QuizContext} from "../context/QuizState"

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


export const Information: React.FC = () => {
    const {selectPokemon} = useContext(QuizContext)
    const classes = useStyle()
    if (!selectPokemon) {
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
                    <img className={classes.image} alt='pokemon' src={selectPokemon.image}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction='column' spacing={1}>
                        <Grid item xs>
                            <Typography gutterBottom variant='h5'>
                                {selectPokemon.name}
                            </Typography>
                            <Divider/>
                            <Typography gutterBottom variant='body2'>
                                {selectPokemon.species.join(' ')}
                            </Typography>
                            <Divider/>
                            <Grid style={{paddingLeft: 20, paddingTop: 20}}>
                                <AudioPlayer src={selectPokemon.audio}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant='body1'>
                    {selectPokemon.description}
                </Typography>
            </Grid>
        </Paper>
    )
}