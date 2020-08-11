import {ActionQuiz, IQuizState} from "./types"

export const quizReducer = (state: IQuizState, action: ActionQuiz) => {
    switch (action.type) {
        case 'ADD_ATTEMPT':
            return {...state, attempt: action.attempt}
        case 'COUNT_SCORE':
            return {...state, score: action.score, correctAnswer: true}
        case 'NEXT_QUESTION':
            return {...state, correctAnswer: false, attempt: 0, question: action.question, selectPokemon: null}
        case 'CLICK_ITEMS':
            return {...state, selectPokemon: action.pokemon}
        case 'REAPEAT_QUIZ':
            return {...state,
                answers: action.newstate.answers,
                attempt: action.newstate.attempt,
                correctAnswer: action.newstate.correctAnswer,
                loading: action.newstate.loading,
                question: action.newstate.question,
                quiz: action.newstate.quiz,
                score: action.newstate.score
            }
        default:
            return state
    }

}
