import testPayload from "../../mocks/test-payload.json";
import { QuestionManager } from "./question-manager";

let questionManager;

describe("question-manager", () => {
  beforeEach(() => {
    questionManager = new QuestionManager(testPayload);
  });

  it("getProgress should work properly", () => {
    expect(questionManager.getProgress("is_heartburn_known")).toBe(0);
    expect(questionManager.getProgress("heartburn_previous_treatment")).toBe(
      25
    );
    expect(questionManager.getProgress("heartburn_weekly_burns")).toBe(50);
  });

  describe("findQuestionById", () => {
    it("should return a question object", () => {
      expect(questionManager.findQuestionById("is_heartburn_known")).toEqual({
        id: "is_heartburn_known",
        question_text: "Is your heartburn previously known?",
        answers: [
          {
            id: "is_heartburn_known_yes",
            label: "Yes",
            score: 5
          },
          {
            id: "is_heartburn_known_no",
            label: "No",
            score: 0
          }
        ],
        next: [
          {
            answered: "is_heartburn_known_yes",
            next_question: "heartburn_previous_treatment"
          },
          {
            answered: "is_heartburn_known_no",
            next_question: "heartburn_weekly_burns"
          }
        ]
      });
    });

    it("should return a return null when not found", () => {
      expect(questionManager.findQuestionById("not-found")).toBe(null);
    });
  });

  it("should return the first question", () => {
    expect(questionManager.getFirstQuestionId()).toBe("is_heartburn_known");
  });

  describe("findOutcomeById", () => {
    it("should return an outcome object", () => {
      expect(
        questionManager.findOutcomeById("rest_and_come_back_later")
      ).toEqual({
        id: "rest_and_come_back_later",
        text:
          "Your symptom description indicates that this is a self-healing condition. " +
          "We recommend that you rest for few days. " +
          "Contact us again if your condition gets worse or if symptoms remain for " +
          "more than three days.",
        show_booking_button: false
      });
    });

    it("should return null", () => {
      expect(questionManager.findOutcomeById("")).toBeNull();
    });
  });

  it("should return the attribute next when given a questionId", () => {
    expect(
      questionManager.getNextByQuestionId("heartburn_weekly_burns")
    ).toEqual([
      {
        next_question: "heartburn_lost_weight"
      }
    ]);
  });

  describe("getNextStep", () => {
    it("should return the next question", () => {
      expect(
        questionManager.getNextStep(
          "is_heartburn_known",
          "is_heartburn_known_yes",
          0
        )
      ).toEqual(["question", "heartburn_previous_treatment"]);

      expect(
        questionManager.getNextStep(
          "heartburn_weekly_burns",
          "heartburn_weekly_burns_4_to_7",
          0
        )
      ).toEqual(["question", "heartburn_lost_weight"]);
    });

    it("should return an outcome based on the score", () => {
      expect(
        questionManager.getNextStep(
          "heartburn_lost_weight",
          "heartburn_lost_weight_yes",
          30
        )
      ).toEqual(["outcome", "see_a_doctor"]);
    });
  });
});
