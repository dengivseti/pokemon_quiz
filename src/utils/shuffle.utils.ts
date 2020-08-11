import {IPokemon} from "../interface"

const random = (n: number) => {
    return Math.floor(Math.random() * Math.floor(n))
}

export const shuffle = (lst: Array<IPokemon>): IPokemon[] => {
    const arr = [...lst]
    for (let i=0; i < arr.length; i++) {
        const j = random(arr.length)
        const k = random(arr.length)
        const t = arr[j]
        arr[j] = arr[k]
        arr[k] = t
    }
    return arr
}
