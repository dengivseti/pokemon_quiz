import React, { useState } from "react"
import {Paper, List, ListItem, ListItemIcon, Checkbox, ListItemText} from "@material-ui/core"
import {IPokemon} from "../interface"
import {makeStyles} from "@material-ui/core/styles"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

interface IAnswerProps {
    pokemons: Array<IPokemon>
    goodId: number
    onSelected(id:number): void
}

const useStyle = makeStyles((theme) => ({
    button: {
        textAlign: 'left',
    }
}))

export const Answers: React.FC<IAnswerProps> = ({pokemons, goodId, onSelected}) => {
    const classes = useStyle()
    const [checked, setChecked] = useState([] as any)

    const selectToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]
        onSelected(value)
        if (currentIndex === -1) {
            newChecked.push(value)
            setChecked(newChecked)
        }
    }

    const colorItem = () => {
        return "primary"
    }

    return (
        <Paper>
            <List>
                {pokemons.map((pokemon) => {
                    return (
                        <ListItem key={pokemon.id} dense button onClick={selectToggle(pokemon.id)}>
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