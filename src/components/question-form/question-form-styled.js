import styled from "styled-components";

import { green, gray } from "../shared/styles";
import checkMark from "../../assets/ic-checkmark.svg";

const lineHeight = 23;

export const Question = styled.div`
  display: block;
  margin-top: 4rem;
`;

export const Options = styled.ul`
  display: flex;
  margin: 1rem auto;
  justify-content: space-evenly;
  list-style: none;
`;

export const Option = styled.li`
  display: block;
  line-height: ${lineHeight}px;
  color: ${({ selected }) => (selected ? "white" : green)};
  background-color: ${({ selected }) => (selected ? green : "white")};
  border: ${({ selected }) => (selected ? "none" : `1px solid ${gray}`)};
  font-weight: bold;
  padding: 0.6rem 1.5rem;
  min-width: 8.5rem;
  border-radius: 1.5rem;
  text-align: ${({ selected }) => (selected ? "left" : "center")};
  cursor: pointer;
  outline: none;
  position: relative;

  &::after {
    content: "";
    display: ${({ selected }) => (selected ? "block" : "none")};
    background: url(${checkMark}) center center no-repeat white;
    height: ${lineHeight}px;
    width: ${lineHeight}px;
    margin-left: 0.5rem;
    border-radius: 50%;
    top: 50%;
    position: absolute;
    right: ${lineHeight / 2}px;
    margin-top: -${lineHeight / 2}px;
  }
`;

export const Footer = styled.div`
  width: 100%;
`;
