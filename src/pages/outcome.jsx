import React from "react";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/layout/layout.jsx";
import { Suggestion } from "../components/suggestion/suggestion.jsx";
import questionManager from "../services/question-manager";

export const Outcome = ({
  match: {
    params: { outcomeId }
  }
}) => {
  if (!outcomeId) {
    const firstQuestionId = questionManager.getFirstQuestionId();
    return <Redirect to={`/question/${firstQuestionId}/score/0`} />;
  }

  const outcome = questionManager.findOutcomeById(outcomeId);

  return (
    <Layout progress={100}>
      <Suggestion
        text={outcome.text}
        showBookingButton={outcome.show_booking_button}
      />
    </Layout>
  );
};
