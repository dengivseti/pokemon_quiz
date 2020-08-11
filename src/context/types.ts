import {IPokemon} from "../interface";

export interface IQuizState {
    quiz: IPokemon[][]
    question: number
    answers: number[]
    loading: boolean
    correctAnswer: boolean
    attempt: number
    score: number
    selectPokemon: IPokemon | null
    nextQuestion: () => void
    countScore: () => void
    addAttemp: () => void
    repeatQuiz: () => void
    clickItems: (pokemon: IPokemon) => void
}

export type ActionQuiz =
    | {type: 'NEXT_QUESTION', question: number}
    | {type: 'COUNT_SCORE', score: number}
    | {type: 'ADD_ATTEMPT', attempt: number}
    | {type: 'REAPEAT_QUIZ', newstate: IQuizState}
    | {type: 'CLICK_ITEMS', pokemon: IPokemon}