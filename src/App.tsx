import React from 'react'
import {QuizPage} from "./pages/QuizPage"
import {Header} from "./components/Header"
import {Container} from "@material-ui/core"
import {ResultPage} from "./pages/ResultPage"

function App() {
    return (
        <div className="App">
            <Container fixed>
            <Header/>
            <QuizPage/>
            <ResultPage/>
            </Container>
        </div>
    )
}

export default App
