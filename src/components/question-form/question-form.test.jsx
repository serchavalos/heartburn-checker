import React from "react";
import { render } from "react-testing-library";

import { TestContainer } from "../shared/test-utils";
import { QuestionForm } from "./question-form.jsx";

describe("QuestionForm", () => {
  it("should render propperly", () => {
    const { container, getByText } = render(
      <TestContainer>
        <QuestionForm
          id="is_heartburn_known"
          text="Is your heartburn previously known?"
          answers={[
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
          ]}
        />
      </TestContainer>
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Is your heartburn previously known?")).toBeDefined();
    expect(container.querySelectorAll("li").length).toBe(2);
  });
});
