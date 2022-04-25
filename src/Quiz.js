import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
        return (
            <div>
                <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
            </div>
        )
    }
}


export default Quiz

// Inside of that div with a className of QuizQuestion, access the first element in the 
// quiz_questions property of the quizData object, and display the instruction_text value.