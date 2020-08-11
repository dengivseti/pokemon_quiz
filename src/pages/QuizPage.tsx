import React, {useState} from "react"
import {Question} from "../components/Question"
import {Grid, Button} from "@material-ui/core"
import {Answers} from "../components/Answers"
import {Information} from "../components/Information"
import {pokemonData} from "../pokemon"
import {IPokemon} from "../interface"

export const QuizPage: React.FC = () => {
    const intPokemon = 1
    const [selectPokemon, setSelectPokemon] = useState<IPokemon | null>()
    const questionPokemon = pokemonData[intPokemon]
    const listAnswerPokemons = pokemonData

    const selectedPokemon = (id: number) => {
        const findPokemon = pokemonData.find(p => p.id === id)
        if (findPokemon) {
            setSelectPokemon(findPokemon)
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Question pokemon={questionPokemon!}/>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Answers
                            pokemons={listAnswerPokemons}
                            goodId={intPokemon}
                            onSelected={(id: number) => selectedPokemon(id)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Information pokemon={selectPokemon!}/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth={true}>Next level</Button>
                </Grid>
            </Grid>
        </div>
    )
}