export class QuestionManager {
  constructor(payload) {
    this.questions = payload.questions || [];
    this.outcomes = payload.outcomes || [];
  }

  getProgress(questionId) {
    const totalNumQuestions = this.questions.length;
    const questionIndex = this.questions.findIndex(
      question => questionId === question.id
    );

    return Math.floor((questionIndex * 100) / totalNumQuestions);
  }

  findQuestionById(questionId) {
    const filtered = this.questions.filter(({ id }) => id === questionId);
    if (filtered.length < 1) {
      return null;
    }
    return filtered[0];
  }

  getFirstQuestionId() {
    return this.questions[0].id;
  }

  findOutcomeById(outcomeId) {
    const filtered = this.outcomes.filter(({ id }) => id === outcomeId);
    if (filtered.length < 1) {
      return null;
    }
    return filtered[0];
  }

  getNextByQuestionId(questionId) {
    const { next } = this.questions.filter(q => q.id === questionId)[0];
    return next;
  }

  getNextStep(questionId, selectedAnswer, score) {
    const next = this.getNextByQuestionId(questionId);
    const nextQuestions = next.filter(e => e.next_question);
    const outcomes = next.filter(e => e.outcome);

    if (nextQuestions.length === 1) {
      return ["question", nextQuestions[0].next_question];
    }

    if (nextQuestions.length > 1) {
      const filtered = nextQuestions.filter(
        ({ answered }) => answered === selectedAnswer
      );

      return ["question", filtered[0].next_question];
    }

    if (outcomes) {
      const filtered = outcomes.filter(
        i => i.max_score && i.max_score >= score
      );
      const outcomeId =
        filtered.length > 0
          ? filtered[filtered.length - 1].outcome
          : outcomes[outcomes.length - 1].outcome;
      return ["outcome", outcomeId];
    }
  }
}
