import React, {createContext, useReducer} from "react"
import {IQuizState} from "./types"
import {quizReducer} from "./quizReducer"
import {shuffle} from "../utils/shuffle.utils"
import {pokemonData} from "../pokemon"
import {IPokemon} from "../interface"


function noop() {
}

function generateQuiz(): IPokemon[][] {
    const lst = []
    for (let i = 0; i < 6; i++) {
        const arr = shuffle(pokemonData)
        lst.push(arr.slice(0, 6))
    }
    return lst
}

function generateAnswers(quiz: IPokemon[][]): number[] {
    const lst = [] as number[]
    quiz.forEach((question) => {
        for (let i = 0; i < question.length; ++i) {
            if (!lst.includes(question[i].id)) {
                lst.push(question[i].id)
                break
            }
        }
    });
    return lst
}

function newQuiz() {
    const newQuiz = generateQuiz()
    const goodAnswers = generateAnswers(newQuiz)
    const quiz = [] as IPokemon[][]
    newQuiz.forEach((q) => {
        quiz.push(shuffle(q))
    })

    return {
        quiz: quiz,
        question: 0,
        answers: goodAnswers,
        loading: false,
        correctAnswer: false,
        attempt: 0,
        score: 0,
        selectPokemon: null,
        nextQuestion: noop,
        countScore: noop,
        addAttemp: noop,
        repeatQuiz: noop,
        clickItems: noop,
    }
}

const initialState = newQuiz()

export const QuizContext = createContext<IQuizState>(initialState)

export const QuizState: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const nextQuestion = () => {
        const question = state.question + 1
        dispatch({
            type: 'NEXT_QUESTION',
            question: question
        })
    }

    const countScore = () => {
        const attempt = state.attempt
        const score = state.score + (5 - attempt)
        dispatch({
            type: 'COUNT_SCORE',
            score: score
        })
    }

    const addAttemp = () => {
        const attempt = state.attempt + 1
        dispatch({
            type: 'ADD_ATTEMPT',
            attempt: attempt
        })
    }

    const repeatQuiz = () => {
        const newstate = newQuiz()
        dispatch({
            type: 'REAPEAT_QUIZ',
            newstate: newstate
        })
    }

    const clickItems = (pokemon: IPokemon) => {
        dispatch({
            type: 'CLICK_ITEMS',
            pokemon: pokemon
        })
    }

    return (
        <QuizContext.Provider value={{
            quiz: state.quiz,
            question: state.question,
            answers: state.answers,
            loading: state.loading,
            correctAnswer: state.correctAnswer,
            attempt: state.attempt,
            score: state.score,
            selectPokemon: state.selectPokemon,
            nextQuestion, countScore, addAttemp, repeatQuiz, clickItems
        }}>
            {children}
        </QuizContext.Provider>
    )
}

