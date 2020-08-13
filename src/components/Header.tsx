import React, {useContext} from "react"
import logo from "../assets/images/pokemon_logo.png"
import {Grid, Typography} from "@material-ui/core"
import {QuizContext} from "../context/QuizState"
import {TabPanel} from "./TabPanel"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(2)
    }
}))

export const Header: React.FC = () => {
    const classes = useStyle()
    const {score} = useContext(QuizContext)

    return (
        <div className={classes.root}>
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
            <TabPanel/>
        </div>

    )
}