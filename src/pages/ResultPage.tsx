import React, {useContext} from "react"
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import {QuizContext} from "../context/QuizState"
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    button: {
        paddingTop: theme.spacing(5)
    }
}))

export const ResultPage: React.FC = () => {
    const classes = useStyle()
    const {repeatQuiz} = useContext(QuizContext)
    const {score} = useContext(QuizContext)
    return (
        <Paper className={classes.paper}>
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <Typography align='center' variant='h2'>Congratulations!</Typography>
                    <Typography align='center' variant='h4'>
                        You completed the quiz and scored {score} out of 30 possible points
                    </Typography>
                </Grid>
                <Grid item xs={10} className={classes.button}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        onClick={repeatQuiz}
                        size="large"
                    >
                        Try again!
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}