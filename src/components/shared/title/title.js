import styled from "styled-components";
import { gray } from "../styles";

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: left;
  padding: 0.5rem 0.5rem 1rem 0.5rem;

  &::after {
    content: "";
    display: block;
    border-bottom: 3px solid ${gray};
    width: 2.25rem;
    height: 1rem;
  }
`;
