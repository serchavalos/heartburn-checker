import React from "react";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/layout/layout.jsx";
import { QuestionForm } from "../components/question-form/question-form.jsx";
import { Title } from "../components/shared/title/title";

import questionManager from "../services/question-manager";

export const Form = ({
  match: {
    params: { questionId, score }
  }
}) => {
  if (!questionId) {
    const firstQuestionId = questionManager.getFirstQuestionId();
    return <Redirect to={`/question/${firstQuestionId}/score/0`} />;
  }

  const progress = questionManager.getProgress(questionId);
  const question = questionManager.findQuestionById(questionId);

  return (
    <Layout progress={progress}>
      {!question && <Title>Not found :-(</Title>}

      {question && (
        <QuestionForm
          id={question.id}
          text={question.question_text}
          score={score}
          answers={question.answers}
        />
      )}
    </Layout>
  );
};
