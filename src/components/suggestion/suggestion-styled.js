import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

import { green } from "../shared/styles";

export const Container = styled.div`
  margin-top: 7rem;
`;

export const Link = styled(BaseLink)`
  color: ${green};
  display: block;
  width: 100%;
  text-align: center;

  &:visited {
    color: ${green};
  }
`;
