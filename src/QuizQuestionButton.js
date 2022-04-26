import React, { Component } from 'react'

class QuizQuestionButton extends Component {

    render() {
        return (
            handleClick =
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )

    }
}


export default QuizQuestionButton