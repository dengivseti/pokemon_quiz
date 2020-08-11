import React, {useContext, useEffect, useState} from "react"
import {Paper, List, ListItem, ListItemIcon, Checkbox, ListItemText} from "@material-ui/core"
import {IPokemon} from "../interface"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import {QuizContext} from "../context/QuizState"
import error from "../assets/sound/error.wav"
import win from "../assets/sound/win.wav"

interface IAnswerProps {
    pokemons: Array<IPokemon>
    goodId: number
}

export const Answers: React.FC<IAnswerProps> = ({pokemons, goodId}) => {
    const {correctAnswer, addAttemp, countScore, question, clickItems} = useContext(QuizContext)
    const [checked, setChecked] = useState([] as any)
    const errorAudio = new Audio(error)
    const winAudio = new Audio(win)

    const playSound = (audioFile: any) => {
        audioFile.play()
    }

    useEffect(() => {
        setChecked([])
    }, [question])

    const selectToggle = (pokemon: IPokemon) => () => {
        const currentIndex = checked.indexOf(pokemon.id)
        const newChecked = [...checked]
        clickItems(pokemon)
        if (currentIndex === -1 && !correctAnswer) {
            newChecked.push(pokemon.id)
            setChecked(newChecked)
            if (goodId === pokemon.id) {
                countScore()
                playSound(winAudio)
                return
            }else{
                playSound(errorAudio)
            }
            addAttemp()
        }
    }

    return (
        <Paper>
            <List>
                {pokemons.map((pokemon) => {
                    return (
                        <ListItem key={pokemon.id} dense button onClick={selectToggle(pokemon)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(pokemon.id) !== -1}
                                    color={(pokemon.id === goodId !) ? 'primary' : 'secondary'}
                                    icon={<FiberManualRecordIcon/>}
                                    checkedIcon={<FiberManualRecordIcon/>}
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                            <ListItemText primary={pokemon.name}/>
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
}