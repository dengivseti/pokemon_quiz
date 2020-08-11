import {IPokemon} from "../interface";

export interface IQuizState {
    quiz: IPokemon[]
    question: number
    answers: number[]
    loading: boolean
    correctAnswer: boolean
    attempt: number
    score: number
    nextQuestion: () => void
    countScore: () => void
}

export type ActionQuiz =
    | {type: 'NEXT_QUESTION'}
    | {type: 'COUNT_QUESTION'}