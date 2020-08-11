import React, {useContext} from "react"
import {Button, Grid, Paper, Typography} from "@material-ui/core"
import {QuizContext} from "../context/QuizState"

export const ResultPage: React.FC = () => {
    const {repeatQuiz} = useContext(QuizContext)
    const {score} = useContext(QuizContext)
    return (
        <Paper >
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3'>Поздравляем!</Typography>
                    <Typography align='center' variant='h6'>
                        Вы прошли викторину и набрали {score} из 30 возможных баллов
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Button variant="contained" color="primary" fullWidth={true} onClick={repeatQuiz}>Попробовать еще раз!</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}