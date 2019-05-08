import React from "react";
import PropTypes from "prop-types";

import { Question, Options, Option, Footer } from "./question-form-styled.js";
import { Title } from "../shared/title/title";
import { Button } from "../shared/button/button";

import questionManager from "../../services/question-manager";

export class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: props.score,
      selectedAnswer: null
    };
  }

  onAnwserClicked(answerId, initialScore) {
    const currentScore = parseInt(this.props.score, 10) + initialScore;
    this.setState({
      selectedAnswer: answerId,
      currentScore: currentScore
    });
  }

  render() {
    const { id, text, answers } = this.props;
    const { selectedAnswer = null, currentScore } = this.state;
    const [type, nextStepId] = selectedAnswer
      ? questionManager.getNextStep(id, selectedAnswer, currentScore)
      : [null, null];

    const path = !selectedAnswer
      ? ""
      : type === "question"
      ? `/question/${nextStepId}/score/${currentScore}`
      : `/outcome/${nextStepId}`;

    return (
      <React.Fragment>
        <Question>
          <Title>{text}</Title>

          <Options>
            {answers.map(({ id, label, score }) => (
              <Option
                key={id}
                selected={selectedAnswer === id}
                onClick={() => this.onAnwserClicked(id, score)}
              >
                {label}
              </Option>
            ))}
          </Options>
        </Question>

        <Footer>
          <Button
            to={path}
            onClick={evt => !selectedAnswer && evt.preventDefault()}
          >
            Next
          </Button>
        </Footer>
      </React.Fragment>
    );
  }
}

QuestionForm.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      score: PropTypes.number
    })
  )
};
