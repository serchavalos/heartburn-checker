import React from "react";
import { render } from "react-testing-library";

import { TestContainer } from "../shared/test-utils";
import { Suggestion } from "./suggestion.jsx";

describe("QuestionForm", () => {
  it("should render propperly", () => {
    const { container, getByText } = render(
      <TestContainer>
        <Suggestion
          text="You seem to be dying but you'll be fine"
          showBookingButton={true}
        />
      </TestContainer>
    );
    expect(container).toMatchSnapshot();
    expect(getByText("You seem to be dying but you'll be fine")).toBeDefined();
    expect(container.querySelectorAll("a").length).toBe(2);
  });

  it("should *not* render the CTA button", () => {
    const { container, getByText } = render(
      <TestContainer>
        <Suggestion text="Just veggies" showBookingButton={false} />
      </TestContainer>
    );
    expect(getByText("Just veggies")).toBeDefined();
    expect(container.querySelectorAll("a").length).toBe(1);
  });
});
