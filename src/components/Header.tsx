import React, {useContext} from "react"
import logo from "../assets/images/pokemon_logo.png"
import {Grid, Typography} from "@material-ui/core"
import {QuizContext} from "../context/QuizState";

export const Header: React.FC = () => {
    const {score} = useContext(QuizContext)

    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={12} sm={6}>
                    <img alt="pokemon quiz" src={logo}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography align='right' variant='h6'>SCORE: {score}</Typography>
                </Grid>
            </Grid>
        </>

    )
}