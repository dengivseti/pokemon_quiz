import React, {useContext} from "react"
import {Question} from "../components/Question"
import {Grid, Button} from "@material-ui/core"
import {Answers} from "../components/Answers"
import {Information} from "../components/Information"
import {pokemonData} from "../pokemon"
import {QuizContext} from "../context/QuizState"
import {ResultPage} from "./ResultPage"
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
    blockQuestion: {
        paddingBottom: theme.spacing(2)
    },
    button: {
        paddingTop: theme.spacing(2)
    }
}))

export const QuizPage: React.FC = () => {
    const classes = useStyle()
    const {quiz, answers, question, correctAnswer, nextQuestion} = useContext(QuizContext)
    const questionPokemon = pokemonData[answers[question]]
    const listPokemon = quiz[question]

    if (question > 5) {
        return (
            <ResultPage/>
        )
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.blockQuestion}>
                    <Question pokemon={questionPokemon!}/>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Answers
                            pokemons={listPokemon}
                            goodId={answers[question]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Information/>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.button}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        disabled={(!correctAnswer) ? true : false} onClick={nextQuestion}
                    >
                        Next level
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}