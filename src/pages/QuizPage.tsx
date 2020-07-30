import React from "react"
import {Question} from "../components/Question"
import {Grid, Button} from "@material-ui/core"
import {Answers} from "../components/Answers"
import {Information} from "../components/Information"

export const QuizPage: React.FC = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Question/>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Answers/>
                    </Grid>
                    <Grid item xs={6}>
                        <Information/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth={true}>Next level</Button>
                </Grid>
            </Grid>
        </div>
    )
}