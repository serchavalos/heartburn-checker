import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import leftArrow from "../../assets/ic-arrow-left-green.svg";
import {
  MainContainer,
  Header,
  BackButton,
  Title,
  ProgressBar,
  Content
} from "./layout-styled";

export const Layout = withRouter(({ progress = 0, children, history }) => {
  return (
    <MainContainer>
      <Header>
        <BackButton src={leftArrow} onClick={() => history.goBack()} />
        <Title>Heartburn Checker</Title>
      </Header>
      <ProgressBar progress={progress} />
      <Content>{children}</Content>
    </MainContainer>
  );
});

Layout.propTypes = {
  progress: PropTypes.number
};
