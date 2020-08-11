import React, {useContext} from "react"
import {Divider, Grid, Paper, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import AudioPlayer from 'material-ui-audio-player'
import {IPokemon} from "../interface"
import what from "../assets/images/what.jpg"
import {QuizContext} from "../context/QuizState"

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
    },
    image: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 150,
        height: 150
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 200,
        height: 150
    }
}))

interface IQuestionProps {
    pokemon: IPokemon
}

export const Question: React.FC<IQuestionProps> = ({pokemon}) => {
    const classes = useStyle()
    const {correctAnswer} = useContext(QuizContext)

    return (
        <>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        {(correctAnswer) ? <img className={classes.image} alt='pokemon' src={pokemon.image}/> : <img className={classes.img} alt="pokemon quiz" src={what}/>}
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant='h4'>
                                    {(correctAnswer) ? pokemon.name : '******'}
                                </Typography>
                                <Divider/>
                            </Grid>
                            <Grid item xs style={{paddingLeft: 20, paddingTop: 20}}>
                                <AudioPlayer src={pokemon.audio}/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}