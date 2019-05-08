import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

import arrowRightWhite from "../../../assets/ic-arrow-right-white.svg";
import { fontColorSecondary, green, gray } from "../styles";

const lineHeight = "20px";

export const Button = styled(BaseLink)`
  display: block;
  color: ${props => (props.to ? "white" : fontColorSecondary)};
  background-color: ${props => (!!props.to ? green : gray)};
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
