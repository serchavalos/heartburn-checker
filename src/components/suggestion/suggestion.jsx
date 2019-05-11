import React from "react";
import PropTypes from "prop-types";

import { Title } from "../shared/title/title";
import { CtaButton } from "../shared/button/button";
import { Container, Link } from "./suggestion-styled";

export const Suggestion = ({ text, showBookingButton }) => {
  return (
    <React.Fragment>
      <Container>
        <Title>Thank for answering the questions!</Title>
        <p>{text}</p>
        {showBookingButton && (
          <CtaButton href="https://www.kry.se/" target="_blank">
            Booking a meeting
          </CtaButton>
        )}
      </Container>
      <Link to="/">Back to the start screen</Link>
    </React.Fragment>
  );
};

Suggestion.propTypes = {
  text: PropTypes.string,
  showBookingButton: PropTypes.bool
};
