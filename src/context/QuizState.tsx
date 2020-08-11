import React, {createContext, useReducer} from "react"
import {IQuizState} from "./types"
import {quizReducer} from "./quizReducer";


function noop(){}

const initialState = {
    quiz: [],
    question: 0,
    answers: [],
    loading: false,
    correctAnswer: false,
    attempt: 0,
    score: 0,
    nextQuestion: noop,
    countScore: noop,
}

export const QuizContext = createContext<IQuizState>(initialState)

export const QuizState: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const nextQuestion = () => {
        return
    }

    const countScore = () => {
        return
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
            nextQuestion, countScore
        }}>
            {children}
        </QuizContext.Provider>
    )
}

