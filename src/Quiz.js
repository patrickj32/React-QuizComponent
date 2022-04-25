import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
        return (
            <div>
                <div><QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position = 1]} /> 
                </div>
            </div>
        )
    }
}


export default Quiz

// Inside of that div with a className of QuizQuestion, access the first element in the 
// quiz_questions property of the quizData object, and display the instruction_text value.