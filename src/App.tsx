import React from 'react'
import {QuizPage} from "./pages/QuizPage"
import {Header} from "./components/Header"
import {Container} from "@material-ui/core"
import {QuizState} from "./context/QuizState";

function App() {
    return (
        <QuizState>
            <div className="App">
                <Container fixed>
                    <Header/>
                    <QuizPage/>
                </Container>
            </div>
        </QuizState>
    )
}

export default App
