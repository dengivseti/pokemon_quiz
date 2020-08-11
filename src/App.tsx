import React from 'react'
import {QuizPage} from "./pages/QuizPage"
import {Header} from "./components/Header"
import {Container} from "@material-ui/core"
import {ResultPage} from "./pages/ResultPage"
import {QuizState} from "./context/QuizState";

function App() {
    return (
        <QuizState>
            <div className="App">
                <Container fixed>
                    <Header/>
                    <QuizPage/>
                    {/*<ResultPage/>*/}
                </Container>
            </div>
        </QuizState>
    )
}

export default App
