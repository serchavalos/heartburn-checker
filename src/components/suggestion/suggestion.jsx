import React from "react";
import PropTypes from "prop-types";

import { Title } from "../shared/title/title";
import { Button } from "../shared/button/button";
import { Container, Link } from "./suggestion-styled";

export const Suggestion = ({ text, showBookingButton }) => {
  return (
    <React.Fragment>
      <Container>
        <Title>Thank for answering the questions!</Title>
        <p>{text}</p>
        {showBookingButton && <Button to="#">Booking a meeting</Button>}
      </Container>
      <Link to="/">Back to the start screen</Link>
    </React.Fragment>
  );
};

Suggestion.propTypes = {
  text: PropTypes.string,
  showBookingButton: PropTypes.bool
};
