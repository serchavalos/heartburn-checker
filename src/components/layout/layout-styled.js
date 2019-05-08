import styled from "styled-components";

import { fontColorPrimary, green, gray, minWidth } from "../shared/styles";

export const MainContainer = styled.div`
  color: ${fontColorPrimary};
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;

  @media (min-width: ${minWidth}) {
    width: ${minWidth};
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  position: relative;
`;

export const BackButton = styled.img`
  display: block;
  position: absolute;
  left: 0;
  padding: 1rem;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const ProgressBar = styled.div`
  height: 2px;
  background-color: ${gray};
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    left: 0;
    top: 0;
    width: ${props => props.progress || 0}%;
    background-color: ${green};
  }
`;

export const Content = styled.div`
  height: 100vh;
  align-items: center;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
