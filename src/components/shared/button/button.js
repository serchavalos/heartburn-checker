import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import arrowRightWhite from "../../../assets/ic-arrow-right-white.svg";
import { fontColorSecondary, green, gray } from "../styles";

const lineHeight = "20px";

const baseButtonStyles = css`
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: ${lineHeight};
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-top: 1rem;

  &::after {
    content: "";
    float: right;
    display: block;
    background: url(${arrowRightWhite}) center center no-repeat transparent;
    height: ${lineHeight};
    width: ${lineHeight};
  }
`;

export const NextButton = styled(Link)`
  ${baseButtonStyles}
  color: ${props => (props.to ? "white" : fontColorSecondary)};
  background-color: ${props => (!!props.to ? green : gray)};
`;

export const CtaButton = styled.a`
  ${baseButtonStyles}

  color: white;
  background-color: ${green};
`;
