import React from "react"
import {Button, Grid, Paper, Typography} from "@material-ui/core"

export const ResultPage: React.FC = () => {

    return (
        <Paper >
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3'>Поздравляем!</Typography>
                    <Typography align='center' variant='h6'>Вы прошли викторину и набрали 0 из 30 возможных баллов</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Button variant="contained" color="primary" fullWidth={true}>Попробовать еще раз!</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}